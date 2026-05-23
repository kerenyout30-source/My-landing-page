"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { LeadSchema, type LeadInput } from "@/lib/schemas";
import { submitLead } from "@/app/actions/submit-lead";
import { contactContent } from "@/lib/site-config";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(LeadSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
    mode: "onBlur",
  });

  async function onSubmit(values: LeadInput) {
    setStatus("submitting");
    const result = await submitLead(values);

    if (result.ok) {
      setStatus("success");
      toast.success(contactContent.successTitle, {
        description: contactContent.successBody,
      });
      reset();
      window.setTimeout(() => setStatus("idle"), 3500);
      return;
    }

    setStatus("error");
    if (result.fieldErrors) {
      for (const [field, message] of Object.entries(result.fieldErrors)) {
        if (message) {
          setError(field as keyof LeadInput, { type: "server", message });
        }
      }
    }
    toast.error(result.error || contactContent.errorBody);
    window.setTimeout(() => setStatus("idle"), 3500);
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-busy={isSubmitting}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          id="name"
          label="שם מלא"
          error={errors.name?.message}
        >
          <Input
            id="name"
            autoComplete="name"
            placeholder="ישראלה ישראלי"
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
            {...register("name")}
          />
        </Field>
        <Field
          id="phone"
          label="טלפון"
          error={errors.phone?.message}
        >
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="050-1234567"
            aria-invalid={!!errors.phone}
            disabled={isSubmitting}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field id="email" label="אימייל" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="name@example.com"
          aria-invalid={!!errors.email}
          disabled={isSubmitting}
          {...register("email")}
        />
      </Field>

      <Field
        id="message"
        label="מה העסק שלכם צריך?"
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={5}
          placeholder="ספרו לי בכמה משפטים על העסק ומה תרצו לפתור עם AI..."
          aria-invalid={!!errors.message}
          disabled={isSubmitting}
          {...register("message")}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-14 px-8 rounded-2xl text-base font-semibold bg-[color:var(--color-neon)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-neon-2)] shadow-[0_0_32px_-4px_rgba(0,245,212,0.55)] hover:shadow-[0_0_40px_-2px_rgba(0,245,212,0.75)] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[color:var(--color-neon)]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            שולחת...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden />
            {contactContent.cta}
          </>
        )}
      </button>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p
          role="alert"
          className="mt-1.5 text-xs text-red-300/90"
          id={`${id}-error`}
        >
          {error}
        </p>
      )}
    </div>
  );
}
