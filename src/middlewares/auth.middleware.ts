import express from 'express';
import JWT from 'jsonwebtoken';
import config from '../config/config';
const authMiddelware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  try {
    const auth = req.get('Authorization');
    const bearer = auth?.split(' ')[0];
    const token = auth?.split(' ')[1];
    if (bearer === 'Bearer' && token) {
      const payload = JWT.verify(token, config.secretToken);
      if (payload) {
        next();
      } else {
        console.log('user not authorized');
      }
    } else {
      console.log('invalid token Bearer' + token);
    }
  } catch (err) {
    console.error(err);
  }
};
export default authMiddelware;
