import jwt from 'jsonwebtoken';
import env from '../config/config.js';

export function requireAuth(req, res, next) {
  const auth = req.headers.authorization || '';
  if (!auth.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Token not valid' });
  }
  const token = auth.split(' ')[1];
  try {
    req.user = jwt.verify(token, env.token.secret);
    return next();
  } catch {
    return res.status(401).send({ message: 'Token not valid' });
  }
}
