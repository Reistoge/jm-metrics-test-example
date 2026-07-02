// Import from Module E (creating a circular dependency)
import { createAdapter } from '../module-e/adapter.js';

// Functions outside class
export function processPayload(payload) {
  const adapter = createAdapter();
  return adapter.normalize(payload);
}

export function buildSummary(payload) {
  return `processed:${payload}`;
}

// Class 1
export class DataProcessor {
  prepare(payload) {
    return payload.toUpperCase();
  }
}

// Class 2
export class PayloadHandler {
  handle(payload) {
    return processPayload(payload);
  }
}
