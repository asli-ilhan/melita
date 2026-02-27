"use client";

import {useState} from "react";

type ContactFormMessages = {
  formName: string;
  formInstitution: string;
  formPhone: string;
  formEmail: string;
  formMessage: string;
  submit: string;
  success: string;
  error: string;
};

type Props = {
  messages: ContactFormMessages;
};

export function ContactForm({messages}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const institution = formData.get("institution") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name?.trim() || !institution?.trim() || !phone?.trim() || !email?.trim() || !message?.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, institution, phone, email, message}),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">{messages.formName}</label>
          <input
            name="name"
            type="text"
            required
            className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">{messages.formInstitution}</label>
          <input
            name="institution"
            type="text"
            required
            className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">{messages.formPhone}</label>
          <input
            name="phone"
            type="tel"
            required
            className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">{messages.formEmail}</label>
          <input
            name="email"
            type="email"
            required
            className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="block text-xs font-medium text-slate-700">{messages.formMessage}</label>
        <textarea
          name="message"
          rows={4}
          required
          className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
        />
      </div>
      {status === "success" && (
        <p className="text-sm text-green-700">{messages.success}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{messages.error}</p>
      )}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
          style={status === "loading" ? undefined : {color: "#ffffff"}}
        >
          {status === "loading" ? "..." : messages.submit}
        </button>
      </div>
    </form>
  );
}
