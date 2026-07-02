import type { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { email } = body;

		if (!email) {
			return Response.json({ error: "Email is required" }, { status: 400 });
		}

		const { data, error } = await resend.emails.send({
			from: "Kenneth <contact@mail.tulang.dev>",
			to: [email],
			subject: "Thank you for contacting me!",
			html: "<p>Thank you for reaching out! I appreciate your message and will get back to you as soon as possible.</p>",
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json({ data });
	} catch (_error) {
		return Response.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
