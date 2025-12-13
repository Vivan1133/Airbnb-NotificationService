import Redis from "ioredis";
import { serverConfig } from ".";

// used closures of JS
function connectToRedis() {
    try {

        const redisConfig = {
            host: serverConfig.REDIS_HOST,
            port: serverConfig.REDIS_PORT
        }

        let redisConnection: Redis;


        return () => {
            if(!redisConnection) {
                redisConnection = new Redis(redisConfig);
            }
            return redisConnection;
        };

    } catch (error) {
        console.log("redis connection failed: ", error);
        throw error;
    }
}


export const getredisConnectionObj = connectToRedis();