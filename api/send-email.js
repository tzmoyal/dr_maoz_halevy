export default (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, headacheType } = req.body;

    // Validate required fields
    if (!name || !phone || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // For now, just return success without sending email
    // This will help us test if the API is working
    console.log('Received form data:', { name, phone, email, headacheType });
    
    res.status(200).json({ 
      success: true, 
      message: 'Form received successfully (test mode)',
      data: { name, phone, email, headacheType }
    });

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process request',
      error: error.message
    });
  }
};