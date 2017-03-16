import authentication from 'feathers-authentication';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import FacebookTokenStrategy from 'passport-facebook-token';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GoogleTokenStrategy } from 'passport-google-token';
import jwt from 'feathers-authentication-jwt';
import local from 'feathers-authentication-local';
import oauth2 from 'feathers-authentication-oauth2';

export default function auth() {
  const app = this;

  const facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    scope: [ 'public_profile', 'email' ],
  };

  const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    scope: [ 'profile' ],
  };

  app
    .configure(authentication({ secret: process.env.TOKEN }))
    .configure(local())
    .configure(jwt())
    .configure(oauth2({
      name: 'facebook',
      Strategy: FacebookStrategy,
      ...facebookConfig,
    }))
    .configure(oauth2({
      name: 'facebook-token',
      Strategy: FacebookTokenStrategy,
      idField: 'facebookId',
      ...facebookConfig,
    }))
    .configure(oauth2({
      name: 'google',
      Strategy: GoogleStrategy,
      ...googleConfig,
    }))
    .configure(oauth2({
      name: 'google-token',
      Strategy: GoogleTokenStrategy,
      idField: 'googleId',
      ...googleConfig,
    }));

  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(['jwt', 'local']),
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ],
    },
  });
}
