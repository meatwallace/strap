import authentication from 'feathers-authentication';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import FacebookTokenStrategy from 'passport-facebook-token';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GoogleTokenStrategy } from 'passport-google-token';

export default function auth() {
  const app = this;

  const config = {
    idField: '_id',
    token: {
      secret: process.env.TOKEN,
    },
    local: {},
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      permissions: {
        authType: 'rerequest',
        scope: [
          'public_profile',
          'email',
        ],
      },
      strategy: FacebookStrategy,
      tokenStrategy: FacebookTokenStrategy,
    },
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      permissions: {
        scope: ['profile'],
      },
      strategy: GoogleStrategy,
      tokenStrategy: GoogleTokenStrategy,
    },
  };

  app.configure(authentication(config));
}
