import bcrypt from 'bcrypt';

export const hash = async (password) => {
  const saltRounds = 5;
  const password_hashed = await bcrypt.hash(password, saltRounds);
  return password_hashed;
};

export const compare = async (password, passwordHash) => {
  const match = await bcrypt.compare(password, passwordHash);
  return match;
};
