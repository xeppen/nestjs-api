import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return 'I am in login method of auth controller';
  }

  signUp() {
    return { msg: 'I am in signup method of auth controller', test: 'test' };
  }
}
