// Posts through our own /api/send-quote backend so the browser never has to
// talk to the LeadConnector hook directly (LeadConnector doesn't send CORS
// headers, which causes browser submissions to fail). The server-side handler
// in api/send-quote.js forwards the lead to LeadConnector.
const ENDPOINT = '/api/send-quote';

export async function submitForm(data) {
  const payload = {
    name: data.name?.trim(),
    phone: data.phone?.trim(),
    service: data.service || data.servicePageTitle || 'Not specified',
    servicePageTitle: data.servicePageTitle || '',
    message: data.message || '',
    formType: data.formType || 'website',
    timestamp: new Date().toISOString(),
    page_url: window.location.href,
  };

  let res;
  try {
    res = await fetch(ENDPOINT, {
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
