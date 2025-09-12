import { Session } from '../../../src/domain/models/Session';

describe('Session Model', () => {
  describe('constructor', () => {
    it('should create a session with current user', () => {
      const session = new Session('admin');

      expect(session.currentUser).toBe('admin');
    });
  });

  describe('user switching', () => {
    it('should allow switching between users', () => {
      const session = new Session('guest');

      expect(session.currentUser).toBe('guest');

      session.currentUser = 'authenticated_user';
      expect(session.currentUser).toBe('authenticated_user');

      session.currentUser = 'admin';
      expect(session.currentUser).toBe('admin');
    });
  });
});
