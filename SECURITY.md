# Security Alert Resolution

## API Key Security

If you received a security alert about exposed secrets, follow these steps:

### 1. Check if your API key was committed to Git

Run this command to check:
```bash
git log --all --source --full-history -p -- "*\.env*" | grep -i "AIza"
```

If you find your API key in the git history, it has been exposed.

### 2. Rotate your API key immediately

1. Go to: https://aistudio.google.com/app/apikey
2. Find your current API key
3. Click "Delete" or "Revoke" to invalidate the old key
4. Create a new API key
5. Update your `.env` file with the new key

### 3. Ensure .env is in .gitignore

The `.env` file should already be in `.gitignore`. Verify with:
```bash
git check-ignore .env
```

If it's not ignored, add it:
```bash
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Add .env to gitignore"
```

### 4. Remove .env from Git history (if it was committed)

⚠️ **WARNING**: This rewrites git history. Only do this if you're sure:

```bash
# Remove .env from all git history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (be careful!)
git push origin --force --all
```

### 5. Best Practices

- ✅ **DO**: Keep `.env` in `.gitignore`
- ✅ **DO**: Use environment variables for API keys
- ✅ **DO**: Rotate keys if exposed
- ❌ **DON'T**: Commit `.env` files
- ❌ **DON'T**: Hardcode API keys in source code
- ❌ **DON'T**: Share API keys in screenshots or messages

### 6. For Production

For production deployments, consider:
- Using a backend API proxy instead of client-side API keys
- Using environment variables in your hosting platform (Vercel, Netlify, etc.)
- Using secret management services

## Current Status

Your `.env` file should be ignored by git. The API key is only used client-side in the chatbot component and is loaded from environment variables.

