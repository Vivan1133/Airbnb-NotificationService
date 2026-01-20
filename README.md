# 📧 Notification Service

Notification Service is responsible for handling asynchronous email notifications across the platform.
It uses Redis-based queues and workers to process mail jobs reliably and at scale.

## 🚀 Features

📬 Asynchronous email processing

🧵 Redis workers for background jobs

📨 Queue-based mail dispatching

🧩 Handlebars (HBS) templating for dynamic emails

✉️ Email delivery using Nodemailer

🔁 Retry-safe, non-blocking notification system

## 🔁 Job Processing Flow

1. A service publishes a mailer job to the notification queue

2. Redis workers listen for incoming jobs

3. Job payload is validated

4. Email content is rendered using HBS templates

5. Email is sent using Nodemailer

6. Job is acknowledged or retried on failure

## Sample mail payload

```
{
  to: "vivan2003.vk@gmail.com",
  subject: "Welcome email",
  templateID: "welcome",
  params: { "name": "Vivan", "appName": "Booking.com" }
}
```

--------------------------------------
## Steps to setup the starter template

1. Clone the project

```
git clone https://github.com/Vivan1133/Airbnb-NotificationService.git <ProjectName>
```

2. Move in to the folder structure

```
cd <ProjectName>
```

3. Install npm dependencies

```
npm i
```

4. Create a new .env file in the root directory and add the `PORT` env variable

```
PORT=3007
REDIS_HOST=localhost
REDIS_PORT=6379
GMAIL_APP_PASS=fduamfsckcfsknfcdi #your app password goes here
GMAIL_ADD=your-mail
```

5. Start the express server

```
npm run dev
```
