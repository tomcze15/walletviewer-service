import * as JwtService from 'domain/authorization/infrastructure/JwtService';

describe('JwtService', () => {
  it('should generate a valid token that can be verified', () => {
    const payload = { userId: 1, username: 'user' };

    const token = JwtService.generateToken(payload);

    expect(() => JwtService.verifyToken(token)).not.toThrow();
    expect(JwtService.verifyToken(token)).toMatchObject(payload);
  });
});
