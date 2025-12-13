// Import from Module B
import { UserService, startService, stopService } from "../module-b/service.js";

// Functions outside class
export function initApp() {
  
    startService();
 
 
}

export function shutdownApp() {
 
    stopService();
 
  console.log("Bye");
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
