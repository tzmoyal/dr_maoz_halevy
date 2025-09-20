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

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
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
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message
    });
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
});

export default app;
