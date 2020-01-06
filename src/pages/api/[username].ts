import { IncomingMessage, ServerResponse } from 'http';

import getUserStreaks, { IStreakModel } from '../../utils/api/getUserStreaks';

interface IHttpRequest extends IncomingMessage {
  query: {
    username: string;
  };
}

export default async (req: IHttpRequest, res: ServerResponse) => {
  const { username } = req.query;
  res.setHeader('Content-Type', 'application/json');

  const result: IStreakModel = await getUserStreaks(username);
  return res.end(
    JSON.stringify(result),
  );
};
