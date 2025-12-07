// Import from Module C (Creating Fan-Out here, Fan-In in Module C)
import { DBConnection, connectDB } from '../module-c/database.js';

// Functions outside class
export function startService() {
  connectDB(); // Function Coupling: Calls external function
}

export function stopService() {
  console.log('Stopping');
}

// Class 1
export class UserService {
  constructor() {
    this.db = new DBConnection(); // Class Coupling: Uses DBConnection
  }

  getUser(id) {
    this.db.query(`SELECT * FROM users WHERE id=${id}`);
    this.db.query(`SELECT * FROM users WHERE id=${id}`);
    this.db.query(`SELECT * FROM users WHERE id=${id}`);
    this.db.query(`SELECT * FROM users WHERE id=${id}`);
    this.db.query(`SELECT * FROM users WHERE id=${id}`);
    this.db.query(`SELECT * FROM users WHERE id=${id}`);
    return this.db.query(`SELECT * FROM users WHERE id=${id}`);
  }
}

// Class 2
export class AuthService {
  login(user, pass) {
    const db = new DBConnection();
    return db.execute('SELECT 1');
  }

  logout() {
    return true;
  }
}