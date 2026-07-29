"use client";

import { useId, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { contactFormAccessKey } from "@/content/site";

type FieldName = "name" | "email" | "organization" | "message";

type FormState = Record<FieldName, string>;

const EMPTY: FormState = { name: "", email: "", organization: "", message: "" };

/**
 * Contact form with underline-only fields and floating labels.
 * Submissions are delivered by Web3Forms (https://web3forms.com): the form
 * POSTs to their API with a public access key, and they email each message
 * to the address that key is registered to. Set the key in
 * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (see .env.example). Success is shown only
 * after the send actually succeeds.
 */
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
// Env var overrides the committed config key if set; otherwise use the
// (public-by-design) key from content/site.ts so it works on any deploy.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? contactFormAccessKey;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (name: FieldName, value: string) =>
    setValues((v) => ({ ...v, [name]: value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please complete your name, email, and a brief message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!ACCESS_KEY) {
      setError(
        "The contact form isn’t configured to send yet. Please email us directly in the meantime."
      );
      return;
    }

    setError(null);
    setSending(true);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New inquiry — ${values.name.trim()}`,
          from_name: "Morris Consulting Group — Website",
          name: values.name.trim(),
          email: values.email.trim(),
          organization: values.organization.trim() || "—",
          message: values.message.trim(),
        }),
      });
      const data: { success?: boolean } = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(
          "Something went wrong sending your note. Please try again, or email us directly."
        );
      }
    } catch {
      setError(
        "We couldn’t reach the server. Please check your connection and try again."
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-6 border-t border-warm-brown/25 pt-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-warm-brown/10 text-warm-brown">
          <Check size={22} />
        </span>
        <p className="font-display text-3xl font-light leading-snug text-deep-blue">
          Thank you. Your note has reached us.
        </p>
        <p className="max-w-prose font-body text-ink/70">
          We read every message ourselves and reply personally. You can expect
          to hear from the firm within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Field
          name="name"
          label="Name"
          value={values.name}
          onChange={(v) => update("name", v)}
          autoComplete="name"
          required
        />
        <Field
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
          required
        />
      </div>

      <Field
        name="organization"
        label="Organization"
        value={values.organization}
        onChange={(v) => update("organization", v)}
        autoComplete="organization"
      />

      <Field
        name="message"
        label="How can we help?"
        value={values.message}
        onChange={(v) => update("message", v)}
        multiline
        required
      />

      {error && (
        <p role="alert" className="font-mono text-xs uppercase tracking-eyebrow text-warm-brown">
          {error}
        </p>
      )}

      <div>
        <Button type="submit" size="lg" className="group" disabled={sending}>
          {sending ? "Sending…" : "Send your note"}
          {!sending && (
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  name: FieldName;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
  required?: boolean;
  autoComplete?: string;
};

function Field({
  name,
  label,
  value,
  onChange,
  type = "text",
  multiline = false,
  required = false,
  autoComplete,
}: FieldProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  const sharedProps = {
    id,
    name,
    value,
    required,
    autoComplete,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    className: cn(
      "peer w-full border-0 border-b border-ink/25 bg-transparent pb-3 pt-1 font-body text-lg text-ink outline-none transition-colors duration-300 placeholder:text-transparent focus:border-warm-brown",
      multiline && "resize-none"
    ),
    placeholder: label,
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 font-mono uppercase tracking-eyebrow transition-all duration-300 ease-editorial",
          floated
            ? "-top-1 text-[0.65rem] text-warm-brown"
            : "top-1 text-xs text-fog"
        )}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      {multiline ? (
        <textarea {...sharedProps} rows={4} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
    </div>
  );
}
