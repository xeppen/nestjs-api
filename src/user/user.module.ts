import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { JwtStrategy } from '../auth/strategy';

@Module({
  controllers: [UserController],
  providers: [JwtStrategy],
})
export class UserModule {}
