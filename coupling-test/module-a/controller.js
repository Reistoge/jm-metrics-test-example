// Import from Module B
import { UserService, startService } from '../module-b/service.js';

// Functions outside class
export function initApp() {
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js

 
 
}

export function shutdownApp() {
      startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  startService(); // Function Coupling: Calls service.js
  console.log('Bye');
}

// Class 1
export class UserController {
  constructor() {
    this.service = new UserService(); // Class Coupling
  }

  handleGet(req) {
    return this.service.getUser(req.id);

  }
}

// Class 2
export class AdminController {
  deleteUser(id) {
    const service = new UserService();
    service.getUser(id); // Method call
  }

  banUser(id) {
    return true;
  }
}