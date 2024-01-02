import { NestFactory } from "@nestjs/core";
import express from "express";
import payload from "payload";
import { AppModule } from "./app.module";

require("dotenv").config();
const app = express();


const start = async () => {
  // Initialize Payload
  await payload.init({
    // # Секретный ключ, который использует для шифрования токенов авторизации
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });


  const nest = await NestFactory.create(AppModule);
  await nest.init();
  app.use(nest.getHttpAdapter().getInstance());


  app.listen(3123);
};


start();