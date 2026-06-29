"use server";

export interface ContactFormState {
	status: "idle" | "success" | "error";
	message: string;
	errors?: {
		name?: string[];
		email?: string[];
		subject?: string[];
		body?: string[];
	};
}

export async function sendContactMessage(
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	const name = formData.get("name")?.toString().trim() ?? "";
	const email = formData.get("email")?.toString().trim() ?? "";
	const subject = formData.get("subject")?.toString().trim() ?? "";
	const body = formData.get("body")?.toString().trim() ?? "";

	// --- Validation ---
	const errors: ContactFormState["errors"] = {};

	if (!name || name.length < 2) {
		errors.name = ["Name must be at least 2 characters."];
	}
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = ["A valid email address is required."];
	}
	if (!subject || subject.length < 3) {
		errors.subject = ["Subject must be at least 3 characters."];
	}
	if (!body || body.length < 10) {
		errors.body = ["Message must be at least 10 characters."];
	}

	if (Object.keys(errors).length > 0) {
		return { status: "error", message: "Please fix the errors below.", errors };
	}

	// --- Send email (swap in your preferred provider) ---
	// Example: Resend, Nodemailer, Formspree, etc.
	// await resend.emails.send({ from: "...", to: "you@email.com", subject, html: `...` });

	// Simulate network delay in development
	await new Promise((r) => setTimeout(r, 800));

	return {
		status: "success",
		message: "Message sent! I'll get back to you soon.",
	};
}
