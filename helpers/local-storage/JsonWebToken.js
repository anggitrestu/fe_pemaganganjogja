import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export function encodeData(payload) {
  try {
    const data = jwt.sign({ user: payload }, SECRET_KEY);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function decodeData(jwtToken) {
  try {
    const data = jwt.verify(jwtToken, SECRET_KEY);
    return data.user;
  } catch (e) {
    return false;
  }
}
