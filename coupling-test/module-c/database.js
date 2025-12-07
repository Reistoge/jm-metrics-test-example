// Functions outside class
export function connectDB() {
  return true;
}

export function disconnectDB() {
  return true;
}

// Class 1
export class DBConnection {
  query(sql) {
    return [];
  }

  execute(sql) {
    return true;
  }
}

// Class 2
export class QueryBuilder {
  select(fields) {
    return this;
  }

  where(condition) {
    return this;
  }
}