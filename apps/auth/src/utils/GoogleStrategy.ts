import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID:
        '244500741704-d7jrbu2cg48gla1g8c0mi4bnebdl7o90.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:4000/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
  }
}
