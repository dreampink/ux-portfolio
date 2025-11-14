import { useState, useRef, useEffect } from 'react'
import { Send, X, MessageCircle, Loader2, Sparkles } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm an AI-assisted assistant here to help answer questions about Ebe's portfolio and UX work. I can tell you about her projects, case studies, and design process. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  
  // Rate limiting: track request times
  const requestTimesRef = useRef<number[]>([])
  const lastRequestTimeRef = useRef<number>(0)
  const MIN_TIME_BETWEEN_REQUESTS = 1000 // 1 second minimum between requests
  const MAX_REQUESTS_PER_MINUTE = 10 // Max 10 requests per minute

  // Initialize Gemini AI (only if API key is available)
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  
  // Log API connection status once on mount
  useEffect(() => {
    if (apiKey && apiKey.trim() !== '' && apiKey !== 'your_api_key_here') {
      console.log('✅ Gemini API: Connected and ready')
    } else {
      console.log('⚠️ Gemini API: Not configured - using rule-based responses')
    }
  }, []) // Only run once on mount

  // System prompt with portfolio information
  const systemPrompt = `You are a helpful assistant for Ebe Etiobhio's UX/UI design portfolio. Your role is to answer questions about her work, case studies, and design process.

About Ebe:
- Ebe Etiobhio is a UX/UI Designer who creates meaningful digital experiences through user-centred design and innovative solutions
- She specialises in understanding user needs and translating them into beautiful, functional designs
- Contact: madebyebe@gmail.com
- LinkedIn: linkedin.com/in/ebe-a-280803177/

Portfolio Projects:
1. Sports Direct - A retail/ecommerce project. Case study available at /case/sport-direct
2. Cancer Research UK - A healthcare/non-profit design project. Case study available at /case/cancer-research-uk
3. Tesco - A retail/ecommerce design project. Case study available at /case/tesco
4. Re-up (formerly Recomme) - Case study available at /case/recomme
5. Mortgage Hub - A financial services project. Case study available at /case/mortgage-hub
6. Polish Pad - Note: This case study is marked as private

Design Process:
Ebe follows a comprehensive design process that includes:
- Problem identification
- Research
- Identifying tensions
- Approach development
- Design output
- Outcomes
- Continuous learning

Guidelines:
- Be friendly, professional, and helpful
- Use UK English spelling (e.g., "specialises" not "specializes", "user-centred" not "user-centered")
- When asked about specific projects, provide helpful information and direct users to the case study pages
- If you don't know specific details about a project, suggest they check the case study
- Keep responses concise but informative
- Be conversational and natural`

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure the chat window is fully rendered
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
    
    // Prevent body scroll when chat is open on mobile
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Hide tooltip after user interaction or after 5 seconds
  useEffect(() => {
    if (showTooltip && !hasInteracted) {
      const timer = setTimeout(() => {
        setShowTooltip(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showTooltip, hasInteracted])

  const handleOpenChat = () => {
    setHasInteracted(true)
    setShowTooltip(false)
    setIsOpen(true)
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    // Rate limiting check
    const now = Date.now()
    const timeSinceLastRequest = now - lastRequestTimeRef.current
    
    // Check minimum time between requests
    if (timeSinceLastRequest < MIN_TIME_BETWEEN_REQUESTS) {
      const waitTime = MIN_TIME_BETWEEN_REQUESTS - timeSinceLastRequest
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: `Please wait ${Math.ceil(waitTime / 1000)} second(s) before sending another message.`,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      return
    }

    // Check requests per minute
    const oneMinuteAgo = now - 60000
    requestTimesRef.current = requestTimesRef.current.filter(time => time > oneMinuteAgo)
    
    if (requestTimesRef.current.length >= MAX_REQUESTS_PER_MINUTE) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "I'm receiving too many requests. Please wait a moment before trying again.",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      return
    }

    // Update rate limiting tracking
    requestTimesRef.current.push(now)
    lastRequestTimeRef.current = now

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      let responseText: string

      // Use Gemini if API key is available, otherwise fall back to mock responses
      if (apiKey && apiKey.trim() !== '' && apiKey !== 'your_api_key_here') {
        try {
          console.log('📤 Gemini API: Sending request...')
          
          // Build conversation history for context (exclude initial greeting)
          const conversationHistory = messages
            .filter(msg => msg.id !== '1')
            .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
            .join('\n')

          // Build the full prompt with system context and history
          const promptWithHistory = conversationHistory 
            ? `${systemPrompt}\n\nPrevious conversation:\n${conversationHistory}\n\nUser: ${userMessage.text}\n\nAssistant:`
            : `${systemPrompt}\n\nUser: ${userMessage.text}\n\nAssistant:`

          // Use the SDK with the correct model name from available models
          const genAI = new GoogleGenerativeAI(apiKey.trim())
          // Use gemini-2.5-flash-preview-05-20 which is available and supports generateContent
          const geminiModel = genAI.getGenerativeModel({ 
            model: 'gemini-2.5-flash-preview-05-20',
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 300,
            },
          })
          
          const result = await geminiModel.generateContent(promptWithHistory)
          const response = await result.response
          responseText = response.text()
          console.log('✅ Gemini API: Response received successfully')
        } catch (geminiError) {
          console.error('❌ Gemini API: Error -', geminiError instanceof Error ? geminiError.message : 'Unknown error')
          
          // Check for specific error types and provide helpful messages
          let errorMessage = "I'm having trouble connecting to the AI service right now."
          let shouldUseFallback = true
          
          if (geminiError instanceof Error) {
            if (geminiError.message.includes('429') || geminiError.message.includes('quota') || geminiError.message.includes('rate limit')) {
              errorMessage = "⚠️ The AI service is currently overloaded or I've reached my rate limit. I'll use my fallback responses for now - please try again in a moment!"
              shouldUseFallback = true
            } else if (geminiError.message.includes('503') || geminiError.message.includes('500') || geminiError.message.includes('unavailable')) {
              errorMessage = "⚠️ The AI service is temporarily unavailable. I'll use my fallback responses for now - please try again in a moment!"
              shouldUseFallback = true
            } else if (geminiError.message.includes('timeout') || geminiError.message.includes('network')) {
              errorMessage = "⚠️ Connection timeout. The AI service took too long to respond. I'll use my fallback responses - please try again!"
              shouldUseFallback = true
            } else {
              errorMessage = "⚠️ I'm having trouble with the AI service right now. I'll use my fallback responses instead - please try again in a moment!"
              shouldUseFallback = true
            }
          }
          
          // Always show the error message first
          const apiErrorMessage: Message = {
            id: (Date.now().toString() + '-error'),
            text: errorMessage,
            sender: 'bot',
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, apiErrorMessage])
          
          // Then provide fallback response if appropriate
          if (shouldUseFallback) {
            await new Promise((resolve) => setTimeout(resolve, 500))
            const fallbackResponse = getMockResponse(userMessage.text)
            const fallbackMessage: Message = {
              id: (Date.now() + 1).toString(),
              text: fallbackResponse,
              sender: 'bot',
              timestamp: new Date(),
            }
            setMessages((prev) => [...prev, fallbackMessage])
          }
          
          setIsLoading(false)
          return // Exit early since we've handled the error
        }
      } else {
        console.log('📝 Using rule-based responses (no API key)')
        // Fallback to mock responses if no API key
        await new Promise((resolve) => setTimeout(resolve, 800))
        responseText = getMockResponse(userMessage.text)
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Chatbot error:', error)
      // Final catch-all error handler
      let errorText = "I'm sorry, I encountered an unexpected error. Please try again later."
      
      if (error instanceof Error) {
        if (error.message.includes('API_KEY')) {
          errorText = "API key issue detected. Please check your Gemini API key in the .env file."
        } else if (error.message.includes('quota') || error.message.includes('limit') || error.message.includes('429')) {
          errorText = "⚠️ The AI service is overloaded or I've reached my rate limit. I'll use my fallback responses for now - please try again in a moment!"
        } else if (error.message.includes('503') || error.message.includes('500')) {
          errorText = "⚠️ The AI service is temporarily unavailable. I'll use my fallback responses - please try again in a moment!"
        }
      }
      
      // Always provide a fallback response
      const fallbackResponse = getMockResponse(userMessage.text)
      errorText = fallbackResponse || errorText
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const getMockResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()
   
    // Check for specific projects FIRST (before general "about" checks)
    // This ensures "tell me about Sports Direct" returns project info, not about Ebe
    if (lowerInput.includes('sports direct') || lowerInput.includes('sport direct')) {
      return "Sports Direct is one of Ebe's case studies! It's a retail/ecommerce project showcasing her UX/UI design work. You can view the full case study with the complete design process, research, and outcomes by navigating to the Work section and clicking on Sports Direct, or visit /case/sport-direct."
    }
    
    if (lowerInput.includes('cancer research') || lowerInput.includes('cancer research uk')) {
      return "Cancer Research UK is a meaningful project in Ebe's portfolio focused on healthcare/non-profit design. The case study covers the full design process including research, problem-solving, and outcomes. Check it out at /case/cancer-research-uk!"
    }
    
    if (lowerInput.includes('tesco') && !lowerInput.includes('about ebe')) {
      return "Tesco is another great case study! It showcases Ebe's work in retail/ecommerce design. You can explore the complete case study including research, approach, and design solutions at /case/tesco."
    }
    
    if (lowerInput.includes('re-up') || lowerInput.includes('recomme') || (lowerInput.includes('re-up') && !lowerInput.includes('about ebe'))) {
      return "Re-up (formerly Recomme) is one of Ebe's projects! You can find the full case study at /case/recomme to see the design process, challenges, and solutions she developed."
    }
    
    if (lowerInput.includes('mortgage hub') || lowerInput.includes('mortgage')) {
      return "Mortgage Hub is a financial services project in Ebe's portfolio. The case study demonstrates her approach to complex financial UX challenges. Explore it at /case/mortgage-hub!"
    }
    
    if (lowerInput.includes('polish pad') || lowerInput.includes('polishpad')) {
      return "Polish Pad is one of Ebe's projects. Note that this case study is marked as private, so detailed information may be limited. You can check the Work section to see what's available!"
    }
    
    // Greetings (check before general "about")
    if (lowerInput.match(/^(hi|hello|hey|greetings)/) || (lowerInput.includes('hello') && !lowerInput.includes('about'))) {
      return "Hi there! 👋 I'm here to help answer questions about Ebe's portfolio and UX work. What would you like to know?"
    }
    
    // Thank you responses
    if (lowerInput.includes('thank') || lowerInput.includes('thanks') || lowerInput.includes('cheers') || lowerInput.includes('ta') || lowerInput.match(/^(ty|thx)/)) {
      return "You're very welcome! 😊 Feel free to ask if you have any other questions about Ebe's portfolio or work. I'm here to help!"
    }
    
    // Acknowledgment responses (ok, okay, k, got it, etc.)
    if (lowerInput === 'k' || lowerInput === 'ok' || lowerInput === 'okay' || lowerInput === 'got it' || lowerInput === 'alright' || lowerInput === 'alright' || lowerInput.match(/^(ok|okay|k|gotcha|sure|yep|yeah)$/)) {
      return "Got it! 👍 Is there anything else you'd like to know about Ebe's portfolio or work?"
    }
    
    // Portfolio/Work overview
    if (lowerInput.includes('portfolio') || (lowerInput.includes('work') && !lowerInput.includes('about'))) {
      return "Ebe has worked on several exciting projects including Sports Direct, Cancer Research UK, Tesco, Re-up, Mortgage Hub, and Polish Pad. Each case study showcases her design process from problem identification through to outcomes. You can explore these in detail in the Work section!"
    }
    
    // About Ebe (only when specifically asking about her, not projects)
    if ((lowerInput.includes('about ebe') || lowerInput.includes('about the designer') || lowerInput.includes('who is ebe') || lowerInput.includes('tell me about ebe')) 
        && !lowerInput.includes('sports direct') && !lowerInput.includes('cancer research') && !lowerInput.includes('tesco') 
        && !lowerInput.includes('re-up') && !lowerInput.includes('mortgage') && !lowerInput.includes('polish pad')) {
      return "Ebe Etiobhio is a UX/UI Designer who creates meaningful digital experiences through user-centred design and innovative solutions. She specialises in understanding user needs and translating them into beautiful, functional designs. Check out the About section to learn more about her background and approach!"
    }
    
    // General "about" (fallback - only if no specific project mentioned)
    if (lowerInput.includes('about') && !lowerInput.includes('sports direct') && !lowerInput.includes('cancer research') 
        && !lowerInput.includes('tesco') && !lowerInput.includes('re-up') && !lowerInput.includes('mortgage') 
        && !lowerInput.includes('polish pad')) {
      return "I can tell you about Ebe's portfolio, specific case studies, or her design process. What would you like to know more about?"
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('get in touch') || lowerInput.includes('linkedin')) {
      return "You can reach Ebe at madebyebe@gmail.com or connect on LinkedIn at linkedin.com/in/ebe-a-280803177/. The contact information is also available in the footer!"
    }
    
    if (lowerInput.includes('process') || lowerInput.includes('design process') || lowerInput.includes('methodology')) {
      return "Ebe follows a comprehensive design process that includes problem identification, research, identifying tensions, approach development, design, outcomes, and continuous learning. Explore the Process section to see this in detail!"
    }
    
    if (lowerInput.includes('hire') || lowerInput.includes('employ')) {
      return "You should hire Ebe as she's a great UX/UI Product Designer with a great passion and understanding for user-centred design and innovative solutions. She works hard and is a great team player who will add great value to your team."
    }
        
    return "That's an interesting question! I can help you learn about Ebe's portfolio, specific case studies (like Sports Direct, Cancer Research UK, Tesco, Re-up, or Mortgage Hub), her design process, or how to get in touch. What would you like to know more about?"
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Stop propagation for k and j keys to prevent global navigation handlers from intercepting them
    if (e.key === 'k' || e.key === 'K' || e.key === 'j' || e.key === 'J') {
      e.stopPropagation()
      return
    }
    
    // Only handle Enter key, let all other keys through normally
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
      return
    }
    // Don't prevent default for any other keys
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-3 w-56 sm:w-64 bg-zinc-900 text-white text-sm rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 shadow-xl animate-fade-in max-w-[calc(100vw-2rem)]">
              <div className="flex items-start space-x-2">
                <Sparkles className="w-4 h-4 mt-0.5 text-pink-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1 text-xs sm:text-sm">Ask me anything!</p>
                  <p className="text-zinc-300 text-[10px] sm:text-xs">I can help you learn about Ebe's portfolio, case studies, and design process.</p>
                </div>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-zinc-400 hover:text-white ml-2 flex-shrink-0"
                  aria-label="Dismiss tooltip"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              {/* Arrow pointing down */}
              <div className="absolute bottom-0 right-4 sm:right-6 transform translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-zinc-900"></div>
              </div>
            </div>
          )}
          
          <button
            onClick={handleOpenChat}
            onMouseEnter={() => setShowTooltip(true)}
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center group animate-pulse-slow"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white"></span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:top-auto z-50 w-full sm:w-96 h-full sm:h-[600px] sm:max-h-[600px] bg-white sm:rounded-lg shadow-2xl flex flex-col border-0 sm:border border-zinc-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base truncate">AI-Assisted Assistant</h3>
                <p className="text-[10px] sm:text-xs text-white/90 truncate">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors flex-shrink-0 ml-2"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-zinc-50 overscroll-contain">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-lg px-3 py-2 sm:px-4 sm:py-2 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white'
                      : 'bg-white text-zinc-900 border border-zinc-200'
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
                  <p
                    className={`text-[10px] sm:text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-zinc-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-zinc-900 border border-zinc-200 rounded-lg px-3 py-2 sm:px-4 sm:py-2">
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-pink-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-zinc-200 p-3 sm:p-4 bg-white flex-shrink-0">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onKeyPress={(e) => {
                  // Allow all key presses through
                  e.stopPropagation()
                }}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2.5 sm:px-4 sm:py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm touch-manipulation"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-lg px-3 py-2.5 sm:px-4 sm:py-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center flex-shrink-0 touch-manipulation min-w-[44px] min-h-[44px]"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                ) : (
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-zinc-500 mt-1.5 sm:mt-2 text-center">
              Press Enter to send
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot

