# Gemini AI Setup Guide

Your chatbot is now configured to use Google Gemini AI! 🎉

## Quick Setup (3 Steps)

### 1. Get Your Free Gemini API Key

1. Visit: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Create `.env` File

In the root of your project (`ux-portfolio/`), create a file named `.env`:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with the API key you copied.

**Important**: Make sure `.env` is in your `.gitignore` file (it should be already).

### 3. Restart Your Dev Server

```bash
# Stop your current dev server (Ctrl+C)
# Then restart it
npm run dev
```

## How It Works

- **With API Key**: The chatbot uses Gemini AI for intelligent, conversational responses
- **Without API Key**: The chatbot falls back to rule-based responses (still works!)

## Features

✅ **Natural Conversations**: Understands context and intent  
✅ **Conversation Memory**: Remembers what you talked about  
✅ **UK English**: Configured to use UK spelling  
✅ **Portfolio Knowledge**: Knows about all your case studies  
✅ **Free Tier**: 1,500 requests/day - perfect for a portfolio!

## Testing

1. Open your portfolio in the browser
2. Click the chatbot button (bottom right)
3. Try asking:
   - "Tell me about Sports Direct"
   - "What's Ebe's design process?"
   - "What projects has she worked on?"

## Troubleshooting

**Chatbot not responding with AI?**
- Check that your `.env` file is in the root directory
- Make sure the variable name is exactly: `VITE_GEMINI_API_KEY`
- Restart your dev server after creating/updating `.env`
- Check the browser console for any errors

**API Key Issues?**
- Make sure you copied the entire key (it's long!)
- No spaces before or after the `=` sign
- The key should start with `AIza...`

## Free Tier Limits

- **15 requests per minute**
- **1,500 requests per day**
- Perfect for a portfolio site!

If you exceed limits, the chatbot will automatically fall back to rule-based responses.

## Security Note

⚠️ **Never commit your `.env` file to git!** It should already be in `.gitignore`, but double-check to be safe.

Your API key is only used client-side in this setup. For production, consider using a backend proxy for better security.

