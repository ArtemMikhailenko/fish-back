// admin.interface.ts
export interface Admin {
    id: number;
    username: string;
    passwordHash: string;
    // ...
  }
  
  // "Публичная" версия без пароля
  export type AdminPublic = Omit<Admin, 'passwordHash'>;
  