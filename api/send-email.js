import nodemailer from 'nodemailer';

const REQUIRED_EMAIL_ENV = ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'EMAIL_FROM', 'EMAIL_TO'];

function getMissingEmailEnvKeys() {
  return REQUIRED_EMAIL_ENV.filter((key) => !process.env[key]?.trim());
}

function parseBody(req) {
  const raw = req.body;
  if (raw == null) return null;
  if (typeof raw === 'object' && !Buffer.isBuffer(raw)) return raw;
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  return null;
}

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

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const missingEnv = getMissingEmailEnvKeys();
    if (missingEnv.length > 0) {
      return res.status(503).json({
        success: false,
        message:
          'Email is not configured. Set these in the Vercel project Environment Variables: ' +
          missingEnv.join(', '),
        missingEnv,
      });
    }

    const body = parseBody(req);
    if (!body) {
      return res.status(400).json({
        success: false,
        message: 'Expected JSON body with name, phone, and email',
      });
    }

    const { name, phone, email, headacheType, message } = body;

    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const from = process.env.EMAIL_FROM?.trim();
    const to = process.env.EMAIL_TO?.trim();

    const mailOptions = {
      from,
      to,
      replyTo: email,
      subject: `בקשה לקביעת תור - ${name}`,
      html: createEmailTemplate({ name, phone, email, headacheType, message }),
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.messageId);
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    const errMsg =
      error instanceof Error ? error.message : typeof error === 'string' ? error : 'Unknown error';
    const isSmtpAuth =
      /535|Invalid login|authentication failed|bad credentials/i.test(errMsg);
    if (!res.headersSent) {
      return res.status(isSmtpAuth ? 502 : 500).json({
        success: false,
        message: 'Failed to send email',
        error: errMsg,
        ...(isSmtpAuth && {
          hint:
            'Gmail rejected the SMTP password. In Google Account: enable 2-Step Verification, create an App Password (not your normal password), set GMAIL_USER and GMAIL_APP_PASSWORD in Vercel Production env, then redeploy.',
        }),
      });
    }
  }
};
