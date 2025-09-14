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
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};

// Email template
const createEmailTemplate = (formData) => {
  return `
    <h2>New Contact Form Submission</h2>
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Headache Type:</strong> ${formData.headacheType || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${formData.message.replace(/\n/g, '<br>')}
      </div>
      <hr style="margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        Submitted on: ${new Date().toLocaleString()}
      </p>
    </div>
  `;
};

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, phone, email, headacheType, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
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
      subject: `${process.env.EMAIL_SUBJECT_PREFIX} - ${name}`,
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
