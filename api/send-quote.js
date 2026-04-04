export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, service, message, formType, servicePageTitle, _gotcha } = req.body;

    // Honeypot — silently reject bots
    if (_gotcha) {
      return res.status(200).json({ success: true });
    }

    // Validate required fields
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!phone || !phone.trim()) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // Check phone has at least 10 digits
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      return res.status(400).json({ error: 'Please enter a valid phone number' });
    }

    const WEBHOOK_URL = process.env.WEBHOOK_URL;
    if (!WEBHOOK_URL) {
      console.error('WEBHOOK_URL environment variable is not set');
      return res.status(500).json({ error: 'Server configuration error. Please call us directly at (310) 490-0246.' });
    }

    // Build payload
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      service: service || servicePageTitle || 'Not specified',
      message: message || '',
      source: formType || 'unknown',
      timestamp: new Date().toISOString(),
      page_url: req.headers.referer || '',
    };

    // Forward to webhook
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook failed:', webhookResponse.status, await webhookResponse.text());
      return res.status(500).json({ error: 'Failed to send. Please call us at (310) 490-0246.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('send-quote error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please call us at (310) 490-0246.' });
  }
}
