import authentication from 'feathers-authentication';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import FacebookTokenStrategy from 'passport-facebook-token';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GoogleTokenStrategy } from 'passport-google-token';

export default function auth() {
  const app = this;

  const config = app.get('auth');

  config.facebook.strategy = FacebookStrategy;
  config.facebook.tokenStrategy = FacebookTokenStrategy;
  config.google.strategy = GoogleStrategy;
  config.google.tokenStrategy = GoogleTokenStrategy;

  app.configure(authentication(config));
}
