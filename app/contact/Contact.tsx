"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { type ContactFormState, sendContactMessage } from "./actions";

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			disabled={pending}
			className="w-full sm:w-auto px-10 py-6 rounded-xl bg-ruby dark:bg-watermelon text-ivory dark:text-black text-sm font-bold tracking-wide hover:bg-crimson dark:hover:bg-watermelon/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_4px_14px_rgba(163,16,42,0.25)] dark:shadow-[0_4px_14px_rgba(255,107,107,0.25)] hover:shadow-[0_6px_20px_rgba(163,16,42,0.35)] dark:hover:shadow-[0_6px_20px_rgba(255,107,107,0.35)] hover:-translate-y-0.5 cursor-pointer active:scale-98 active:translate-y-0"
		>
			{pending ? "Sending…" : "Send message"}
		</Button>
	);
}

function Field({
	id,
	label,
	error,
	children,
}: {
	id: string;
	label: string;
	error?: string[];
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={id}
				className="text-xs font-bold uppercase tracking-widest text-charcoal/80 dark:text-ivory/80 transition-colors"
			>
				{label}
			</label>
			{children}
			{error && (
				<p
					id={`${id}-error`}
					className="text-xs text-crimson dark:text-watermelon font-semibold mt-0.5 transition-colors"
				>
					{error[0]}
				</p>
			)}
		</div>
	);
}

const initialState: ContactFormState = { status: "idle", message: "" };

export default function Contact() {
	const [state, formAction] = useActionState(sendContactMessage, initialState);

	if (state.status === "success") {
		return (
			<div className="w-full max-w-3xl mx-auto bg-ivory dark:bg-white/5 backdrop-blur-md border-2 border-ruby/10 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.08)] dark:shadow-none flex flex-col items-center justify-center gap-4 text-center min-h-100 transition-colors duration-500">
				<div className="w-16 h-16 rounded-full bg-ruby/10 dark:bg-watermelon/10 border border-ruby/20 dark:border-watermelon/20 flex items-center justify-center text-ruby dark:text-watermelon text-2xl font-bold animate-bounce transition-colors">
					✓
				</div>
				<h3 className="text-xl font-bold text-(--color-rich-black) dark:text-ivory mt-2 transition-colors">
					Message Received!
				</h3>
				<p className="text-charcoal dark:text-ivory/70 max-w-sm text-sm leading-relaxed transition-colors">
					{state.message}
				</p>
				<p className="text-xs text-charcoal/50 dark:text-ivory/50 mt-4 bg-ivory/60 dark:bg-black/40 px-4 py-1.5 rounded-full border border-charcoal/10 dark:border-white/10 transition-colors">
					You can safely close this tab.
				</p>
			</div>
		);
	}

	return (
		<div className="w-full max-w-3xl mx-auto bg-ivory dark:bg-white/5 dark:backdrop-blur-md border-2 border-ruby/10 dark:border-white/10 p-6 sm:p-10 md:p-12 rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.01)] dark:shadow-none transition-all duration-300 hover:scale-[1.005]">
			<form action={formAction} noValidate className="flex flex-col gap-6">
				{state.status === "error" && !state.errors && (
					<p className="text-sm text-crimson dark:text-watermelon border border-crimson/25 dark:border-watermelon/25 rounded-xl px-4 py-3 bg-crimson/5 dark:bg-watermelon/5 font-medium transition-colors">
						{state.message}
					</p>
				)}

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<Field id="name" label="Name" error={state.errors?.name}>
						<Input
							id="name"
							type="text"
							name="name"
							autoComplete="name"
							placeholder="Your name"
							className="rounded-xl border-charcoal/15 dark:border-white/10 bg-white dark:bg-black/40 px-4 py-6 text-sm text-(--color-rich-black) dark:text-ivory placeholder:text-charcoal/40 dark:placeholder:text-ivory/30 focus-visible:ring-2 focus-visible:ring-ruby/20 dark:focus-visible:ring-watermelon/20 focus-visible:border-ruby dark:focus-visible:border-watermelon hover:border-charcoal/30 dark:hover:border-white/20 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] dark:shadow-none"
							aria-describedby={state.errors?.name ? "name-error" : undefined}
						/>
					</Field>

					<Field id="email" label="Email" error={state.errors?.email}>
						<Input
							id="email"
							type="email"
							name="email"
							autoComplete="email"
							placeholder="you@email.com"
							className="rounded-xl border-charcoal/15 dark:border-white/10 bg-white dark:bg-black/40 px-4 py-6 text-sm text-(--color-rich-black) dark:text-ivory placeholder:text-charcoal/40 dark:placeholder:text-ivory/30 focus-visible:ring-2 focus-visible:ring-ruby/20 dark:focus-visible:ring-watermelon/20 focus-visible:border-ruby dark:focus-visible:border-watermelon hover:border-charcoal/30 dark:hover:border-white/20 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] dark:shadow-none"
							aria-describedby={state.errors?.email ? "email-error" : undefined}
						/>
					</Field>
				</div>

				<Field id="subject" label="Subject" error={state.errors?.subject}>
					<Input
						id="subject"
						type="text"
						name="subject"
						placeholder="What's this about?"
						className="rounded-xl border-charcoal/15 dark:border-white/10 bg-white dark:bg-black/40 px-4 py-6 text-sm text-(--color-rich-black) dark:text-ivory placeholder:text-charcoal/40 dark:placeholder:text-ivory/30 focus-visible:ring-2 focus-visible:ring-ruby/20 dark:focus-visible:ring-watermelon/20 focus-visible:border-ruby dark:focus-visible:border-watermelon hover:border-charcoal/30 dark:hover:border-white/20 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] dark:shadow-none"
						aria-describedby={
							state.errors?.subject ? "subject-error" : undefined
						}
					/>
				</Field>

				<Field id="body" label="Message" error={state.errors?.body}>
					<Textarea
						id="body"
						name="body"
						rows={6}
						placeholder="Tell me about your project, opportunity, or just say hello."
						className="rounded-xl border-charcoal/15 dark:border-white/10 bg-white dark:bg-black/40 px-4 py-3 text-sm text-(--color-rich-black) dark:text-ivory placeholder:text-charcoal/40 dark:placeholder:text-ivory/30 focus-visible:ring-2 focus-visible:ring-ruby/20 dark:focus-visible:ring-watermelon/20 focus-visible:border-ruby dark:focus-visible:border-watermelon hover:border-charcoal/30 dark:hover:border-white/20 resize-none transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] dark:shadow-none"
						aria-describedby={state.errors?.body ? "body-error" : undefined}
					/>
				</Field>

				<div className="flex items-center justify-between flex-wrap gap-4 pt-3 border-t border-charcoal/10 dark:border-white/10 mt-2 transition-colors">
					<p className="text-xs text-charcoal/60 dark:text-ivory/50 font-semibold tracking-wide transition-colors">
						Typically responds within 1–2 business days.
					</p>
					<SubmitButton />
				</div>
			</form>
		</div>
	);
}
