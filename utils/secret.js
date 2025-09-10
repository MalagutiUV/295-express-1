import crypto from 'crypto';

const secret = crypto.randomBytes(512).toString('hex');

console.log(secret);
