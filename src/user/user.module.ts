import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { JwtStrategy } from '../auth/strategy';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [JwtStrategy, UserService],
})
export class UserModule {}
