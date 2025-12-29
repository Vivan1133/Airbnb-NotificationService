import { Job, Worker } from "bullmq";
import { MAILER_QUEUE } from "../queues/mailer.queue";
import { getredisConnectionObj } from "../config/redis.config";
import { MAILER_PAYLOAD } from "../producers/email.producer";
import { NotificationDTO } from "../dtos/notification.dto";
import { getTransporterObj } from "../config/nodemailer.config";
import { serverConfig } from "../config";
import { renderMailTemplate } from "../templates/template.hbs";

export const setupMailerWorker = () => {
    const emailProcessor = new Worker<NotificationDTO>(
        MAILER_QUEUE,
        async (job: Job) => {
            if(job.name !== MAILER_PAYLOAD) {
                throw new Error("Invalid job name")
            }

            const payload : NotificationDTO = job.data;

            console.log("Inside email: ", payload);

            const transporter = getTransporterObj();

            const message = {
                from: serverConfig.GMAIL_ADD,
                to: payload.to,
                subject: payload.subject,
                text: await renderMailTemplate(payload.templateID, payload.params)
            }

            console.log("before email sent")

            try {
                const info = await transporter.sendMail(message);
                console.log("INFO: ", info)
            } catch(error) {
                console.log("failed to send mail")
                console.log(error);
            }

            console.log("After email sent")
            
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
}


// the jobs get stored in two sets after processing by the workers, we can set the options
// of controlling these jobs in the sets (failed, completed)