import { IncomingMessage, ServerResponse } from 'http';

import { getUserStreaks } from '../../utils/api';

interface IHttpRequest extends IncomingMessage {
  query: {
    username: string;
  };
}

export default async (req: IHttpRequest, res: ServerResponse) => {
  const { username } = req.query;
  res.setHeader('Content-Type', 'application/json');
  const result = getUserStreaks(username);
  return res.end(
    JSON.stringify(result),
  );
};
