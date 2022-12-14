import * as argon2 from 'argon2';
const passwordVerification = async (
  hashedPassword: string,
  password: string
): Promise<boolean> => {
  try {
    const hashingConfig = {
      parallelism: 1,
      memoryCost: 64000,
      timeCost: 3,
    };

    return await argon2.verify(
      hashedPassword.replace(/ /g, ''),
      password.replace(/ /g, ''),
      hashingConfig
    );
  } catch (err) {
    throw new Error(`Cann't create user : ${err}`);
  }
};
export default passwordVerification;
