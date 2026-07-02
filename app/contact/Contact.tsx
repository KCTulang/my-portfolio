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
			className="w-full sm:w-auto px-10 py-6 rounded-xl bg-ruby text-ivory text-sm font-bold tracking-wide hover:bg-crimson disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_4px_14px_rgba(163,16,42,0.25)] hover:shadow-[0_6px_20px_rgba(163,16,42,0.35)] hover:-translate-y-0.5 cursor-pointer active:scale-98 active:translate-y-0"
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
				className="text-xs font-bold uppercase tracking-widest text-charcoal/80"
			>
				{label}
			</label>
			{children}
			{error && (
				<p
					id={`${id}-error`}
					className="text-xs text-crimson font-semibold mt-0.5"
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
			<div className="w-full max-w-3xl mx-auto bg-ivory border-2 border-ruby/10 p-8 md:p-12 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-4 text-center min-h-100">
				<div className="w-16 h-16 rounded-full bg-ruby/10 border border-ruby/20 flex items-center justify-center text-ruby text-2xl font-bold animate-bounce">
					✓
				</div>
				<h3 className="text-xl font-bold text-(--color-rich-black) mt-2">
					Message Received!
				</h3>
				<p className="text-charcoal max-w-sm text-sm leading-relaxed">
					{state.message}
				</p>
				<p className="text-xs text-charcoal/50 mt-4 bg-ivory/60 px-4 py-1.5 rounded-full border border-charcoal/10">
					You can safely close this tab.
				</p>
			</div>
		);
	}

	return (
		<div className="w-full max-w-3xl mx-auto bg-ivory border-2 border-ruby/10 p-6 sm:p-10 md:p-12 rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.01)] transition-transform duration-300 hover:scale-[1.005]">
			<form action={formAction} noValidate className="flex flex-col gap-6">
				{state.status === "error" && !state.errors && (
					<p className="text-sm text-crimson border border-crimson/25 rounded-xl px-4 py-3 bg-crimson/5 font-medium">
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
							className="rounded-xl border-charcoal/15 bg-white px-4 py-6 text-sm text-(--color-rich-black) placeholder:text-charcoal/40 focus-visible:ring-2 focus-visible:ring-ruby/20 focus-visible:border-ruby hover:border-charcoal/30 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
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
							className="rounded-xl border-charcoal/15 bg-white px-4 py-6 text-sm text-(--color-rich-black) placeholder:text-charcoal/40 focus-visible:ring-2 focus-visible:ring-ruby/20 focus-visible:border-ruby hover:border-charcoal/30 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
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
						className="rounded-xl border-charcoal/15 bg-white px-4 py-6 text-sm text-(--color-rich-black) placeholder:text-charcoal/40 focus-visible:ring-2 focus-visible:ring-ruby/20 focus-visible:border-ruby hover:border-charcoal/30 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
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
						className="rounded-xl border-charcoal/15 bg-white px-4 py-3 text-sm text-(--color-rich-black) placeholder:text-charcoal/40 focus-visible:ring-2 focus-visible:ring-ruby/20 focus-visible:border-ruby hover:border-charcoal/30 resize-none transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
						aria-describedby={state.errors?.body ? "body-error" : undefined}
					/>
				</Field>

				<div className="flex items-center justify-between flex-wrap gap-4 pt-3 border-t border-charcoal/10 mt-2">
					<p className="text-xs text-charcoal/60 font-semibold tracking-wide">
						Typically responds within 1–2 business days.
					</p>
					<SubmitButton />
				</div>
			</form>
		</div>
	);
}
