const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const AUDIENCE_NAME = 'GoodBotAI Newsletter';

async function getOrCreateAudience(): Promise<string | null> {
  // List audiences
  const res = await fetch('https://api.resend.com/audiences', {
    headers: { Authorization: `Bearer ${RESEND_API_KEY}` }
  });
  const data = await res.json();
  const existing = (data.data || []).find((a: any) => a.name === AUDIENCE_NAME);
  if (existing) return existing.id;

  // Create new audience
  const create = await fetch('https://api.resend.com/audiences', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: AUDIENCE_NAME, description: 'Newsletter subscribers for GoodBotAI updates' })
  });
  const created = await create.json();
  return created.id || null;
}

export async function addSubscriber(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const audienceId = await getOrCreateAudience();
    if (!audienceId) {
      return { success: false, error: 'Could not get audience ID' };
    }

    const result = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, unsubscribed: false })
    });
    const data = await result.json();

    if (!result.ok) {
      // Contact already exists is not a real error
      if (data.error?.message?.includes('already exists')) {
        return { success: true };
      }
      return { success: false, error: data.error?.message || 'Failed to subscribe' };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return { success: false, error: 'Service temporarily unavailable' };
  }
}
