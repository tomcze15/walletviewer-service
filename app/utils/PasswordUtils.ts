import crypto from 'crypto';
import { PasswordHash } from 'domain/user/core/model/Password';
import { PBKDF2_CONFIG } from '@config/security/CryptoConfig';

/**
 *
 * @param {*} password - The plain text password
 * @param {*} hash - The hash stored in the database
 * @param {*} salt - The salt stored in the database
 *
 * This function uses the crypto library to decrypt the hash using the salt and then compares
 * the decrypted hash/salt with the password that the user provided at login
 */
export function validPassword(password: string, hash: string, salt: string): boolean {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, PBKDF2_CONFIG.iterations, PBKDF2_CONFIG.keyLength, PBKDF2_CONFIG.digest)
    .toString('hex');
  return hash === hashVerify;
}

/**
 *
 * @param {*} password - The password string that the user inputs to the password field in the register form
 *
 * This function takes a plain text password and creates a salt and hash out of it.  Instead of storing the plaintext
 * password in the database, the salt and hash are stored for security
 *
 */
export function generatePassword(password: string): PasswordHash {
  const salt = crypto.randomBytes(32).toString('hex');
  const generatedHash = crypto
    .pbkdf2Sync(password, salt, PBKDF2_CONFIG.iterations, PBKDF2_CONFIG.keyLength, PBKDF2_CONFIG.digest)
    .toString('hex');

  return {
    salt: salt,
    hash: generatedHash
  };
}
