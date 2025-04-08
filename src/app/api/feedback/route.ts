import { NextResponse, NextRequest } from "next/server";
import HttpError from "@/helpers/HttpError";
import nodemailer from "nodemailer";

type FeedbackData = {
	name: string;
	phone: string;
	message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
	try {
		const body: FeedbackData = await req.json();
		const { name, phone, message } = body;

		if (!name || !message || !phone) {
			return HttpError(400, `FeedbackData is rong.`);
		};


		const transporter = nodemailer.createTransport({
			service: "gmail", // або ваш SMTP-сервер
			auth: {
				user: process.env.EMAIL_USER as string,
				pass: process.env.EMAIL_PASS as string,
			},
			// tls: {
			// 	rejectUnauthorized: false, // НЕБЕЗПЕЧНО ДЛЯ ПРОДАКШНУ
			// },
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: "sportschoolkyiv15@gmail.com", // Куди надсилати повідомлення
			subject: "Нове повідомлення з форми",
			text: `Ім'я: ${name}\nТелефон: ${phone}\nПовідомлення: ${message}`,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json({ success: true, message: "Повідомлення надіслано!" });
	} catch (error) {
		console.error("Помилка відправки:", error);
		return NextResponse.json({ success: false, message: "Помилка сервера" }, { status: 500 });
	}
}