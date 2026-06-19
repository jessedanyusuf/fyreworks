import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useSEO } from "@/lib/useSEO";
import { SITE, SOCIAL_LINKS } from "@/data/site";

const STAGE_OPTIONS = [
  "Pre-launch",
  "Launched, refining",
  "Scaling",
  "Rebranding",
  "Not sure yet",
] as const;

const ENGAGEMENT_OPTIONS = [
  "Full brand",
  "Creative direction retainer",
  "Focused project",
  "Not sure yet",
] as const;

const schema = z.object({
  name: z.string().min(2, "Your name, please."),
  company: z.string().min(1, "What are you building this for?"),
  building: z.string().min(10, "A sentence or two will do."),
  stage: z.enum(STAGE_OPTIONS),
  engagement: z.enum(ENGAGEMENT_OPTIONS),
  start: z.string().min(1, "A rough timeline helps."),
  notes: z.string().optional(),
  email: z.string().email("We'll need an email to reply."),
});

type FormValues = z.infer<typeof schema>;

const FORM_NAME = "fyreworks-contact";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k] ?? ""))
    .join("&");
}

export default function Contact() {
  useSEO({
    title: "Let's talk — Fyreworks",
    description:
      "Fyreworks takes on a limited number of engagements each year. Tell us what you're building.",
    path: "/contact",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { stage: "Pre-launch", engagement: "Full brand" },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": FORM_NAME,
          ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v ?? ""])),
        } as Record<string, string>),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-white/30";
  const labelClass = "block text-xs uppercase tracking-[0.18em] text-white/50 mb-3";

  return (
    <>
      <section className="px-6 lg:px-12 pt-20 md:pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-8">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em]">
            Let's talk.
          </h1>
        </div>
      </section>

      <ScrollReveal as="section" className="px-6 lg:px-12 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">Opening</p>
          <div className="md:col-span-8 md:col-start-5 space-y-5 text-xl md:text-2xl leading-relaxed text-white/80">
            <p>
              Fyreworks takes on a limited number of engagements each year. We work best with
              founders, creatives, and builders who've already decided they're not interested in
              average.
            </p>
            <p className="text-white">If that's you, tell us what you're building.</p>
          </div>
        </div>
      </ScrollReveal>

      <section className="px-6 lg:px-12 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">
            The form
          </p>

          <div className="md:col-span-8 md:col-start-5">
            {status === "success" ? (
              <div className="py-16">
                <h2 className="font-display text-3xl md:text-5xl tracking-[-0.01em]">
                  Message received.
                </h2>
                <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-prose">
                  We reply to every inquiry within three business days. If we're not the right
                  studio for what you're building, we'll tell you — and usually point you to
                  someone who is.
                </p>
              </div>
            ) : (
              <form
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-12"
                noValidate
              >
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" tabIndex={-1} />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name
                  </label>
                  <input id="name" {...register("name")} className={fieldClass} placeholder="First and last" />
                  {errors.name && <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Your company or project
                  </label>
                  <input id="company" {...register("company")} className={fieldClass} />
                  {errors.company && (
                    <p className="mt-2 text-sm text-red-300">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="building" className={labelClass}>
                    What are you building?
                  </label>
                  <textarea
                    id="building"
                    {...register("building")}
                    rows={3}
                    className={`${fieldClass} resize-none`}
                  />
                  {errors.building && (
                    <p className="mt-2 text-sm text-red-300">{errors.building.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>What stage are you at?</label>
                  <div className="flex flex-wrap gap-3">
                    {STAGE_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className="relative cursor-pointer text-sm border border-white/20 px-4 py-2 hover:border-white/60 transition-colors has-[:checked]:bg-white has-[:checked]:text-black has-[:checked]:border-white"
                      >
                        <input type="radio" value={opt} {...register("stage")} className="sr-only" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>What kind of engagement?</label>
                  <div className="flex flex-wrap gap-3">
                    {ENGAGEMENT_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className="relative cursor-pointer text-sm border border-white/20 px-4 py-2 hover:border-white/60 transition-colors has-[:checked]:bg-white has-[:checked]:text-black has-[:checked]:border-white"
                      >
                        <input
                          type="radio"
                          value={opt}
                          {...register("engagement")}
                          className="sr-only"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="start" className={labelClass}>
                    When do you want to start?
                  </label>
                  <input id="start" {...register("start")} className={fieldClass} placeholder="e.g. Within a month" />
                  {errors.start && (
                    <p className="mt-2 text-sm text-red-300">{errors.start.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="notes" className={labelClass}>
                    Anything else we should know?
                  </label>
                  <textarea
                    id="notes"
                    {...register("notes")}
                    rows={3}
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-3 text-sm tracking-[0.08em] uppercase border-b border-white/30 pb-1 hover:border-white transition-colors disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending…" : "Send it"}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  {status === "error" && (
                    <p className="mt-4 text-sm text-red-300">
                      Something went wrong. Email us directly at {SITE.email}.
                    </p>
                  )}
                </div>

                <p className="pt-8 text-sm text-white/50 leading-relaxed max-w-prose">
                  We reply to every inquiry within three business days. If we're not the right
                  studio for what you're building, we'll tell you, and we'll usually point you to
                  someone who is.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <ScrollReveal as="section" className="px-6 lg:px-12 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">Direct</p>
          <div className="md:col-span-8 md:col-start-5 space-y-6 text-lg md:text-xl text-white/80">
            <a href={`mailto:${SITE.email}`} className="block text-2xl md:text-3xl text-white hover:underline">
              {SITE.email}
            </a>
            <p className="text-white/60">{SITE.location}</p>
            <div className="flex flex-wrap gap-6 pt-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
