import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UserModule,
    MongooseModule.forRoot('')
  ],
})
export class AppModule { }
