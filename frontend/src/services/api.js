// Talks to the Express backend.
// Set VITE_API_URL in your .env (defaults to /api, which the Vite dev server
// proxies to http://localhost:5000).

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    ...options,
  });

  const isJson = res.headers
    .get('content-type')
    ?.includes('application/json');

  const body = isJson ? await res.json() : null;

  if (!res.ok) {
    throw new Error(
      body?.message || `Request failed with status ${res.status}`
    );
  }

  return body;
}

/**
 * Sends the running chat history to the backend, which forwards it to
 * Groq/OpenAI and returns the assistant's reply.
 *
 * @param {{role: 'user'|'assistant', content: string}[]} messages
 */
export function sendChatMessage(messages) {
  return request('/chat', {
    method: 'POST',
    body: JSON.stringify({ messages }),
  });
}

/**
 * Submits the contact form.
 * The backend validates, stores (optional), and emails the notification.
 */
export function submitContactForm(payload) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
