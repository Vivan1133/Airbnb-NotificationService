import fs from "fs/promises";
import Handlebars from "handlebars";
import path from "path";
import { InternalServerError } from "../utils/errors/app.error";

export async function renderMailTemplate(templateId: string, params : Record<string, any>) : Promise<string> {

    const templatePath = path.join(__dirname, "mails", `${templateId}.hbs`);

    try {
        const content = await fs.readFile(templatePath, 'utf-8');
        const template = Handlebars.compile(content);
        return template(params);
    } catch (error) {
        throw new InternalServerError("error while templating");
    }

}