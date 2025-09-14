# Email Setup Guide

This guide will help you set up Gmail SMTP for the contact form.

## Prerequisites

1. A Gmail account
2. Two-factor authentication enabled on your Gmail account

## Step 1: Generate App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click on "2-Step Verification"
4. Scroll down to "App passwords" and click on it
5. Select "Mail" as the app and "Other" as the device
6. Enter "Dr. Eyal Maoz Halevy Website" as the name
7. Click "Generate"
8. Copy the 16-character password (it will look like: abcd efgh ijkl mnop)

## Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` file with your Gmail credentials:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=your-email@gmail.com
   EMAIL_SUBJECT_PREFIX=New Contact Form Submission
   PORT=3000
   NODE_ENV=development
   ```

## Step 3: Run the Application

### Option 1: Run both frontend and backend
```bash
npm run dev:full
```

### Option 2: Run separately
Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run dev
```

## Step 4: Test the Contact Form

1. Open your browser to `http://localhost:5173`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your Gmail inbox for the email

## Troubleshooting

### Common Issues

1. **"Invalid login" error**: Make sure you're using the App Password, not your regular Gmail password
2. **"Less secure app access" error**: This is normal - use App Passwords instead
3. **CORS errors**: Make sure the backend server is running on port 3000
4. **Email not received**: Check your spam folder

### Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Use App Passwords instead of your main Gmail password
- Consider using environment variables in production

## Production Deployment

For production, set these environment variables in your hosting platform:

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `EMAIL_FROM`
- `EMAIL_TO`
- `EMAIL_SUBJECT_PREFIX`
- `PORT`
- `NODE_ENV`
