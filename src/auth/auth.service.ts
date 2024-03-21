import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return 'I am in login method of auth controller';
  }

  signUp(dto: AuthDto) {
    return {
      msg: 'I am in signup method of auth controller',
      test: 'test',
    };
  }
}
