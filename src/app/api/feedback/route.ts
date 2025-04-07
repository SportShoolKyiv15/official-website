import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FeedbackData {
	name: string;
	phone: string;
	message: string;
}

export async function POST(req: Request) {
	try {
		const { name, phone, message }: FeedbackData = await req.json();

		// Налаштування транспорту для надсилання email (залишаємо, щоб отримувати повідомлення)
		const transporter = nodemailer.createTransport({
			service: "gmail", // або ваш SMTP-сервер
			auth: {
				user: process.env.EMAIL_USER as string,
				pass: process.env.EMAIL_PASS as string,
			},
		});

		// Формуємо лист
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: "your-email@example.com", // Куди надсилати повідомлення
			subject: "Нове повідомлення з форми",
			text: `Ім'я: ${name}\nТелефон: ${phone}\nПовідомлення: ${message}`,
		};

		// Відправка листа
		await transporter.sendMail(mailOptions);

		return NextResponse.json({ success: true, message: "Повідомлення надіслано!" });
	} catch (error) {
		console.error("Помилка відправки:", error);
		return NextResponse.json({ success: false, message: "Помилка сервера" }, { status: 500 });
	}
}