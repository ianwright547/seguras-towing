// ── Paste your webhook URL here ──
const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Y7wOLPd7DJ1UPHzcD8hG/webhook-trigger/3c86fc69-2d9b-4239-b509-55ff0daef5f9';

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
