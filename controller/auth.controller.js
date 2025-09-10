import { UsersService } from '../services/user.service.js';
import jwt from 'jsonwebtoken';
import env from '../config/config.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: 'Missing required fields: {email, password}',
    });
  }

  const userExist = await UsersService.checkUser(email, password);

  if (!userExist) {
    return res.status(401).send({
      message: 'User Credentials not correct',
    });
  }

  const user = await UsersService.getByEmail(email);

  const payload = {
    sub: user.id,
    email: email,
  };

  const token = jwt.sign(payload, env.token.secret);

  res.status(200).send({
    ok: true,
    token: token,
  });
};

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send({
      message: 'Missing required fields: {username, password, email}',
    });
  }

  try {
    const user = await UsersService.insertOne(username, password, email);

    res.status(200).send({ ok: true, id: user.id });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({ error: true });
  }
};
