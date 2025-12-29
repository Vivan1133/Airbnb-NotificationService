// This file contains all the basic configuration logic for the app server to work
// import dotenv from 'dotenv';
import "dotenv/config"

type ServerConfig = {
    PORT: number,
    REDIS_HOST: string,
    REDIS_PORT: number,
    GMAIL_ADD: string,
    GMAIL_APP_PASS: string,
}

// (function loadEnv() {
//     dotenv.config();
//     console.log(`Environment variables loaded`);
// })();


export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001,
    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
    GMAIL_ADD: process.env.GMAIL_ADD || "vivan2003.vk@gmail.com",
    GMAIL_APP_PASS: process.env.GMAIL_APP_PASS || "replace-your-app-password"
};