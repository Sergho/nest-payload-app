import { Module } from '@nestjs/common';
// import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
require("dotenv").config();

// @Module({
//   imports: [MongooseModule.forRoot(process.env.MONGODB_URI), PostModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}