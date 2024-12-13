import dotenv from "dotenv";
import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer";

dotenv.config();

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    const {name, email, message, subject} = req.body;

    if (!name || !email || !message || !subject) {
        return res.status(400).json({message: "All fields are required"});
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "2525"),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "team.kerry.college@gmail.com", // Укажите ваш email
            subject: subject,
            text: message,
        });

        res.status(200).json({message: "Email sent successfully"});
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({message: "Error sending email"});
    }
}
