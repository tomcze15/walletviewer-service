import crypto from 'crypto';
import { validPassword, generatePassword } from '@utils/PasswordUtils';
import { PBKDF2_CONFIG } from '@config/security/CryptoConfig';

describe('PasswordUtils', () => {
  describe('validPassword', () => {
    it('should return true for valid password', () => {
      const password = 'password123';
      const salt = crypto.randomBytes(32).toString('hex');
      const hash = crypto
        .pbkdf2Sync(password, salt, PBKDF2_CONFIG.iterations, PBKDF2_CONFIG.keyLength, PBKDF2_CONFIG.digest)
        .toString('hex');

      expect(validPassword(password, hash, salt)).toBe(true);
    });

    it('should return false for invalid password', () => {
      const password = 'password123';
      const salt = crypto.randomBytes(32).toString('hex');
      const hash = crypto
        .pbkdf2Sync(password, salt, PBKDF2_CONFIG.iterations, PBKDF2_CONFIG.keyLength, PBKDF2_CONFIG.digest)
        .toString('hex');

      expect(validPassword('invalidPassword', hash, salt)).toBe(false);
    });
  });

  describe('generatePassword', () => {
    it('should return an object with salt and hash', () => {
      const password = 'password123';
      const { salt, hash } = generatePassword(password);

      expect(salt).toBeDefined();
      expect(hash).toBeDefined();
    });

    it('should generate valid hash for given password and salt', () => {
      const password = 'password123';
      const { salt, hash } = generatePassword(password);
      const hashVerify = crypto
        .pbkdf2Sync(password, salt, PBKDF2_CONFIG.iterations, PBKDF2_CONFIG.keyLength, PBKDF2_CONFIG.digest)
        .toString('hex');

      expect(hash).toBe(hashVerify);
    });
  });
});
