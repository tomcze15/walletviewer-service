import { Algorithm } from 'jsonwebtoken';
import ms from 'ms';

export const algorithmToSign: Algorithm = 'RS256';
export const accessTokenExpiry = ms('10m');
export const refreshTokenExpiry = ms('7d');
export const cookieExpiry = ms('7d');
