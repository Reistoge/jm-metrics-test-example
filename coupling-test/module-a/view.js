// Import from Module B
import { Formatter, calculateTax } from '../module-b/logic.js';

// Functions outside class
export function renderPage(data) {
  const tax = calculateTax(100); // Function Coupling
  console.log(tax);
}

export function renderError(err) {
  console.error(err);
}

// Class 1
export class UserView {
  displayProfile(user) {
    const fmt = new Formatter();
    return fmt.formatCurrency(user.balance);
  }

  hideProfile() {
    return true;
  }
}

// Class 2
export class DashboardView {
  showStats(stats) {
    const fmt = new Formatter();
    return fmt.formatDateString(new Date());
  }

  refresh() {
    return true;
  }
}