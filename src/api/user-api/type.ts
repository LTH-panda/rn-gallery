export type RegisterParmas = {
  username: string;
  email: string;
  password: string;
};

export type LoginParams = {
  identifier: string;
  password: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AuthResult = {
  jwt: string;
  user: User;
};
