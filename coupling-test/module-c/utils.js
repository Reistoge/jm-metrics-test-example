// Functions outside class
export function formatDate(date) {
  return date.toString();
}

export function generateId() {
  return Math.random().toString();
}

// Class 1
export class Logger {
  log(message) {
    console.log(message);
  }
  
  error(message) {
    console.error(message);
  }
}

// Class 2
export class MathHelper {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}