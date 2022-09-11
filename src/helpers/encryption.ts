import config from '../config/config';
import bcrypt from 'bcryptjs';
const hashPassword = (password: string): string => {
    const salt = config.salt;
    const pepper = config.pepper;
    return bcrypt.hashSync(`${password}${pepper}`, salt);
}
export default hashPassword