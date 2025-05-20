// frontend/src/lib/api.ts
const API_BASE = 'http://localhost:3000/api'; // NestJS default port

export const api = {
  farmers: {
    create: (data: any) => fetch(`${API_BASE}/farmers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
    getAll: () => fetch(`${API_BASE}/farmers`).then(res => res.json()),
  },
  messages: {
    send: (data: any) => fetch(`${API_BASE}/messages/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  },
  weather: {
    // Add weather endpoints
  },
  products: {
    // Add product endpoints
  }
};