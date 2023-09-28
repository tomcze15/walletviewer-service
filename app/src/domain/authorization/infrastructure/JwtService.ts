import jwt, { SignOptions } from 'jsonwebtoken';
import { SECRET_KEY, PUBLIC_KEY } from '@config/environment/EnvironmentConfig';
import { algorithmToSign, accessTokenExpiry } from '@config/auth/AuthConfig';

type Payload = string | object;

export function generateToken(payload: Payload, options?: Partial<SignOptions>): string {
  const optionsToSign: SignOptions = {
    algorithm: algorithmToSign,
    expiresIn: accessTokenExpiry,
    ...options
  };

  const token = jwt.sign(payload, SECRET_KEY, optionsToSign);

  return token;
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, PUBLIC_KEY);
  } catch (error) {
    throw new Error('Token is invalid or expired');
  }
}
