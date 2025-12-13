import { Job, Worker } from "bullmq";
import { MAILER_QUEUE } from "../queues/mailer.queue";
import { getredisConnectionObj } from "../config/redis.config";
import { MAILER_PAYLOAD } from "../producers/email.producer";

const emailProcessor = new Worker(
    MAILER_QUEUE,
    async (job: Job) => {

        if(job.name !== MAILER_PAYLOAD) {
            
        }

    },
    {
        connection: getredisConnectionObj()
    }
)

emailProcessor.on("failed", () => {
    console.log("Email processing failed")
})

emailProcessor.on("completed", () => {
    console.log("Email processing done successfully")
})