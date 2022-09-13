import * as argon2 from 'argon2';
import * as crypto from 'crypto';
const encryptPassword = (password: string) => {
  try {
    const hashingConfig = {
      parallelism: 1,
      memoryCost: 64000,
      timeCost: 3,
    };
    const salt = crypto.randomBytes(16);
    const hashed = argon2.hash(password.replace(/ /g, ''), {
      ...hashingConfig,
      salt,
    });
    return hashed;
  } catch (err) {
    console.error(err);
  }
};
export default encryptPassword;
