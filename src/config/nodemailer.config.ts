import nodemailer from "nodemailer";
import { serverConfig } from "./index";


const config = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: serverConfig.GMAIL_ADD,
        pass: serverConfig.GMAIL_APP_PASS
    }
}

// export const transporter = nodemailer.createTransport(config);

const nodeMailertransporterObj = () => {
    let transporter : nodemailer.Transporter;

    return () => {
        if(!transporter) {
            transporter = nodemailer.createTransport(config);
        }
        return transporter;
    }
}


export const getTransporterObj = nodeMailertransporterObj();