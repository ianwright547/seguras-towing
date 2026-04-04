// ── Paste your webhook URL here ──
const WEBHOOK_URL = 'https://hook.us2.make.com/5oin8lq4v58fwp8qvqii23zoapk0o9h6';

export async function submitForm(data) {
  const payload = {
    name: data.name?.trim(),
    phone: data.phone?.trim(),
    service: data.service || data.servicePageTitle || 'Not specified',
    message: data.message || '',
    source: data.formType || 'website',
    timestamp: new Date().toISOString(),
    page_url: window.location.href,
  };

  let res;
  try {
    res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Could not connect. Please call us directly at (310) 490-0246.');
  }

  if (!res.ok) {
    throw new Error('Failed to send. Please call us directly at (310) 490-0246.');
  }

  return { success: true };
}
