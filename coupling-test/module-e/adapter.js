// Import from Module D (creating a circular dependency)
import { DataProcessor } from '../module-d/processor.js';

export function createAdapter() {
  return new DataAdapter();
}

export class DataAdapter {
  normalize(payload) {
    const processor = new DataProcessor();
    return processor.prepare(payload);
  }
}

export class AdapterFactory {
  build() {
    return createAdapter();
  }
}
