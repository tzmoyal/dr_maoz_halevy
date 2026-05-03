import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const REQUIRED_EMAIL_ENV = [
  'GMAIL_USER',
  'GMAIL_APP_PASSWORD',
  'EMAIL_FROM',
  'EMAIL_TO',
];

function getMissingEmailEnvKeys() {
  return REQUIRED_EMAIL_ENV.filter((key) => !process.env[key]?.trim());
}

// Create transporter for Gmail (same SMTP settings as api/send-email.js on Vercel)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Email template
const createEmailTemplate = (formData) => {
  const headacheType = formData.headacheType || 'לא צוין';
  
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #333; direction: rtl; text-align: right;">
      <h2 style="color: #2563eb; margin-bottom: 20px;">בקשה לקביעת תור - ד"ר אייל מעוז הלוי</h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-right: 4px solid #2563eb;">
        <p style="margin: 0 0 15px 0; font-size: 16px;">
          שלום רב,<br><br>
          אבקש לקבוע תור לד"ר אייל מעוז הלוי, מומחה כאבי ראש, בשל <strong>${headacheType}</strong>.<br><br>
          נא צרו עימי קשר
        </p>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
          <p style="margin: 5px 0;"><strong>בכבוד רב,</strong></p>
          <p style="margin: 5px 0;"><strong>${formData.name}</strong></p>
          <p style="margin: 5px 0;"><strong>${formData.phone}</strong></p>
          <p style="margin: 5px 0;"><strong>${formData.email}</strong></p>
        </div>
      </div>
      
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
      <p style="font-size: 12px; color: #666; text-align: left;">
        נשלח ב: ${new Date().toLocaleString('he-IL')}
      </p>
    </div>
  `;
};

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    const missingEnv = getMissingEmailEnvKeys();
    if (missingEnv.length > 0) {
      return res.status(503).json({
        success: false,
        message:
          'Email is not configured on the server. Add these to a .env file and restart the API: ' +
          missingEnv.join(', '),
        missingEnv,
      });
    }

    const { name, phone, email, headacheType, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `בקשה לקביעת תור - ${name}`,
      html: createEmailTemplate({ name, phone, email, headacheType, message })
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent:', info.messageId);
    
    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    const errMsg =
      error instanceof Error ? error.message : typeof error === 'string' ? error : 'Unknown error';
    const isSmtpAuth =
      /535|Invalid login|authentication failed|bad credentials/i.test(errMsg);
    if (!res.headersSent) {
      res.status(isSmtpAuth ? 502 : 500).json({
        success: false,
        message: 'Failed to send email',
        error: errMsg,
        ...(isSmtpAuth && {
          hint:
            'Gmail rejected the SMTP password. Use a Google App Password (2FA required), not your normal password, in .env as GMAIL_APP_PASSWORD.',
        }),
      });
    }
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  const missing = getMissingEmailEnvKeys();
  if (missing.length > 0) {
    console.warn(
      `[send-email] Missing env: ${missing.join(', ')} — add to .env and restart, or /api/send-email returns 503.`,
    );
  }
});

export default app;
