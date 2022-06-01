import client from 'api/client';
import {AuthResult, LoginParams, RegisterParmas} from './type';

export const register = async ({username, email, password}: RegisterParmas) => {
  const res = await client.post<AuthResult>('/auth/local/register', {
    username,
    email,
    password,
  });
  return res.data;
};

export const login = async ({identifier, password}: LoginParams) => {
  const res = await client.post<AuthResult>('/auth/local', {
    identifier,
    password,
  });
  return res.data;
};
