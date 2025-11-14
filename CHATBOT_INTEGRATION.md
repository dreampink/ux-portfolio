# Chatbot Integration Guide

The chatbot component has been added to your portfolio and is now **AI-assisted** using Google Gemini! 🎉

**Current Status**: The chatbot is powered by Google Gemini AI (gemini-2.5-flash-preview-05-20) and provides intelligent, conversational responses about your portfolio. It falls back to rule-based responses if the API is unavailable or if there's an error.

## Current Implementation

The chatbot is located at `src/components/Chatbot.tsx` and is integrated into your main App component. It's now fully configured with Google Gemini AI and will use AI responses when the API key is set, falling back to rule-based responses if needed.

## Integration Options

### Option 1: OpenAI API

1. Install the OpenAI SDK (if needed):
```bash
npm install openai
```

2. Update the `handleSend` function in `Chatbot.tsx`:

```typescript
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Add to .env file
  dangerouslyAllowBrowser: true // Only for client-side, consider using a backend proxy
})

const handleSend = async () => {
  // ... existing code ...
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for Ebe Etiobhio's UX portfolio. Answer questions about the portfolio, case studies, design process, and contact information."
        },
        ...messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        })),
        {
          role: "user",
          content: userMessage.text
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    })

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response.choices[0].message.content || "I'm sorry, I couldn't generate a response.",
      sender: 'bot',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, botMessage])
  } catch (error) {
    // ... error handling ...
  }
}
```

3. Create a `.env` file in the root directory:
```
VITE_OPENAI_API_KEY=your_api_key_here
```

### Option 2: Backend API Proxy (Recommended for Production)

For security, it's better to use a backend API that handles the AI calls:

1. Create a backend endpoint (e.g., `/api/chat`)
2. Update the `handleSend` function:

```typescript
const handleSend = async () => {
  // ... existing code ...
  
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage.text,
        conversationHistory: messages,
      }),
    })

    const data = await response.json()

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: data.response,
      sender: 'bot',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, botMessage])
  } catch (error) {
    // ... error handling ...
  }
}
```

### Option 3: Other AI Services

You can integrate with other services like:
- **Anthropic Claude**: Similar to OpenAI
- **Google Gemini**: Use `@google/generative-ai`
- **Hugging Face**: Use their inference API
- **Custom LLM**: Connect to your own model

## Free AI Options

### Completely Free Options:

1. **Google Gemini (Free Tier)**
   - Free tier: 15 requests per minute, 1,500 requests per day
   - No credit card required
   - Good for low to moderate traffic portfolios
   - Setup: `npm install @google/generative-ai`

2. **Hugging Face Inference API (Free Tier)**
   - Free tier available with rate limits
   - Open-source models
   - Good for experimentation
   - Setup: Use their REST API directly

3. **Keep Using Mock Responses**
   - The current implementation works with predefined responses
   - Completely free, no API costs
   - Good for simple Q&A about your portfolio
   - You can expand the `getMockResponse` function with more responses

### Free Tier Options (with limits):

1. **OpenAI (Free Tier)**
   - $5 free credit when you sign up
   - After that: ~$0.002 per 1K tokens (very cheap for low traffic)
   - GPT-3.5-turbo is very affordable

2. **Anthropic Claude (Free Tier)**
   - Some free credits on signup
   - Then pay-as-you-go pricing

### Cost Estimates for Low Traffic:

For a personal portfolio with ~100 messages/month:
- **OpenAI GPT-3.5-turbo**: ~$0.20-0.50/month
- **Google Gemini Free**: $0/month (within limits)
- **Mock responses**: $0/month

**Recommendation**: Start with Google Gemini's free tier or keep the mock responses. Both are free and work well for portfolio sites!

## Environment Variables

If using client-side API keys, add them to `.env`:
```
VITE_OPENAI_API_KEY=your_key_here
```

**Important**: Never commit API keys to version control. Add `.env` to `.gitignore`.

## Customization

### Styling
The chatbot uses Tailwind CSS and matches your portfolio's pink/rose color scheme. You can customize colors in the component by changing the gradient classes.

### Initial Message
Modify the initial bot message in the `useState` hook at the top of the component.

### System Prompt
When integrating with an AI service, customize the system prompt to provide context about:
- Your portfolio structure
- Available case studies
- Your design process
- Contact information
- Any specific information you want the bot to know

## Security Considerations

1. **Never expose API keys in client-side code** - Use environment variables
2. **Use a backend proxy** - This is the most secure approach
3. **Rate limiting** - Implement rate limiting to prevent abuse
4. **Input validation** - Sanitize user inputs before sending to AI

## Testing

The chatbot currently works with mock responses. Test it by:
1. Running `npm run dev`
2. Clicking the chat button in the bottom-right corner
3. Asking questions about the portfolio

Once you integrate with an AI service, test with various questions to ensure the responses are appropriate and helpful.

