// Import from Module C
import { MathHelper, formatDate } from '../module-c/utils.js';

// Functions outside class
export function calculateTax(amount) {
  const helper = new MathHelper();
  return helper.multiply(amount, 0.2);
}

export function getTimestamp() {
  return formatDate(new Date());
}

// Class 1
export class Calculator {
  sumTotal(items) {
    const helper = new MathHelper();
    return helper.add(items[0], items[1]);
  }

  diff(a, b) {
    return a - b;
  }
}

// Class 2
export class Formatter {
  formatCurrency(val) {
    return `$${val}`;
  }

  formatDateString(date) {
    return formatDate(date);
  }
}