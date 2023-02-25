import axios from 'axios';
import { IRequest } from './interface';

export const request = async ({
  method = 'GET',
  body = {},
  url,
  params = {},
  headers = {},
}: IRequest) => {
  const req = await axios({
    baseURL: 'http://localhost:5005',
    url,
    method,
    data: body,
    params,
    headers,
  });
  return req.data;
};
