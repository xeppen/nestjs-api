import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    console.log({ dto: dto });
    return this.authService.signUp();
  }

  @Post('login')
  signIn() {
    return this.authService.login();
  }
}
