import axios, {HeadersDefaults} from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:1337/api',
  withCredentials: true,
});

interface CommenHeaderProps extends HeadersDefaults {
  Authorization: string;
}

export function applyToken(jwt: string) {
  client.defaults.headers = {
    Authorization: `Bearer ${jwt}`,
  } as CommenHeaderProps;
}

export function clearToken() {}

export default client;
