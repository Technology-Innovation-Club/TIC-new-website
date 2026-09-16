"use client";

import { useState } from "react";
import {
  DEADLINE_LABEL,
  TRACKS,
  validateSubmission,
  type FieldErrors,
} from "@/lib/builders-challenge";

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelCls =
  "mb-1.5 block text-sm font-semibold text-primary font-poppins";

const errCls = "mt-1.5 text-sm font-medium text-destructive";

const AGREEMENTS = [
  {
    key: "agreeInactive",
    text: "I agree that if accepted, I am liable to be removed from the club if I remain inactive for 3 consecutive weeks.",
  },
  {
    key: "agreeParticipate",
    text: "I commit to actively participating in club activities and contributing to the club's development.",
  },
  {
    key: "agreeConduct",
    text: "I pledge to maintain good merit, conduct myself professionally, and represent the Tech Innovation Club with excellence.",
  },
] as const;

type AgreementKey = (typeof AGREEMENTS)[number]["key"];

export function SubmissionForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [track, setTrack] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [prototypeUrl, setPrototypeUrl] = useState("");
  const [processDocLink, setProcessDocLink] = useState("");
  const [docFile, setDocFile] = useState<File | null>(null);
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [statement, setStatement] = useState("");
  const [agreements, setAgreements] = useState<Record<AgreementKey, boolean>>({
    agreeInactive: false,
    agreeParticipate: false,
    agreeConduct: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  function toggleAgreement(key: AgreementKey) {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    const clientErrors = validateSubmission({
      fullName,
      email,
      phone,
      track,
      projectTitle,
      prototypeUrl,
      processDocLink,
      portfolioUrl,
      statement,
      agreeInactive: agreements.agreeInactive,
      agreeParticipate: agreements.agreeParticipate,
      agreeConduct: agreements.agreeConduct,
      hasDocFile: docFile !== null,
    });
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      document
        .getElementById("submit-errors")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    try {
      const form = new FormData();
      form.set("fullName", fullName.trim());
      form.set("email", email.trim());
      form.set("phone", phone.trim());
      form.set("track", track);
      form.set("projectTitle", projectTitle.trim());
      form.set("prototypeUrl", prototypeUrl.trim());
      form.set("processDocLink", processDocLink.trim());
      form.set("portfolioUrl", portfolioUrl.trim());
      form.set("statement", statement.trim());
      if (agreements.agreeInactive) form.set("agreeInactive", "on");
      if (agreements.agreeParticipate) form.set("agreeParticipate", "on");
      if (agreements.agreeConduct) form.set("agreeConduct", "on");
      if (docFile) form.set("processDocFile", docFile);

      const res = await fetch("/api/builders-challenge/submissions", {
        method: "POST",
        body: form,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data?.errors) {
          setErrors(data.errors as FieldErrors);
          document
            .getElementById("submit-errors")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          setServerError("Something went wrong. Please try again.");
        }
        setSubmitting(false);
        return;
      }
      setReferenceId(String(data.id));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setServerError("Network error. Check your connection and try again.");
    }
    setSubmitting(false);
  }

  if (referenceId) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center tic-shadow sm:p-12">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary/10 text-2xl">
          🎉
        </div>
        <h3 className="mt-4 font-poppins text-2xl font-semibold text-primary">
          Submission received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-foreground/70">
          Your build is in. Our reviewers will grade it over the next week. Top
          5 solutions get promoted across TIC channels and featured on our site.
        </p>
        <p className="mx-auto mt-6 inline-block rounded-xl border border-dashed border-primary/30 bg-muted px-6 py-3 font-mono text-lg font-bold text-primary">
          {referenceId}
        </p>
        <p className="mt-3 text-sm text-foreground/60">
          Save this reference ID. We will use it if we contact you.
        </p>
        <button
          type="button"
          onClick={() => {
            setReferenceId(null);
            setFullName("");
            setEmail("");
            setPhone("");
            setTrack("");
            setProjectTitle("");
            setPrototypeUrl("");
            setProcessDocLink("");
            setDocFile(null);
            setPortfolioUrl("");
            setStatement("");
            setAgreements({
              agreeInactive: false,
              agreeParticipate: false,
              agreeConduct: false,
            });
            setErrors({});
          }}
          className="mt-6 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-muted"
        >
          Submit another project
        </button>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 tic-shadow sm:p-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="font-poppins text-2xl font-semibold text-primary">
            Submit your build
          </h3>
          <p className="mt-1 text-sm text-foreground/60">
            Deadline: {DEADLINE_LABEL}. All fields marked * are required.
          </p>
        </div>
        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          Core step
        </span>
      </div>

      {errorCount > 0 && (
        <div
          id="submit-errors"
          role="alert"
          className="mt-6 rounded-xl border border-destructive/30 bg-destructive/5 p-4"
        >
          <p className="text-sm font-bold text-destructive">
            {errorCount} thing{errorCount === 1 ? "" : "s"} to fix before
            submitting:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-destructive">
            {Object.values(errors).map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </div>
      )}
      {serverError && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm font-semibold text-destructive"
        >
          {serverError}
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bc-name" className={labelCls}>
            Full name *
          </label>
          <input
            id="bc-name"
            name="fullName"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Adaeze Okafor"
            className={inputCls}
          />
          {errors.fullName && <p className={errCls}>{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="bc-email" className={labelCls}>
            Email *
          </label>
          <input
            id="bc-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputCls}
          />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="bc-phone" className={labelCls}>
            Phone / WhatsApp <span className="font-normal text-foreground/50">(optional)</span>
          </label>
          <input
            id="bc-phone"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0803 000 0000"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="bc-track" className={labelCls}>
            Challenge stream *
          </label>
          <select
            id="bc-track"
            name="track"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            className={inputCls}
          >
            <option value="">Choose your stream</option>
            {TRACKS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title} - {t.tagline}
              </option>
            ))}
          </select>
          {errors.track && <p className={errCls}>{errors.track}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="bc-title" className={labelCls}>
          Project title *
        </label>
        <input
          id="bc-title"
          name="projectTitle"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          placeholder="e.g. FraudShield: USSD scam alerts in Yoruba, Igbo, Hausa"
          className={inputCls}
        />
        {errors.projectTitle && <p className={errCls}>{errors.projectTitle}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="bc-prototype" className={labelCls}>
          Prototype link *
        </label>
        <input
          id="bc-prototype"
          name="prototypeUrl"
          type="url"
          inputMode="url"
          value={prototypeUrl}
          onChange={(e) => setPrototypeUrl(e.target.value)}
          placeholder="https://your hosted app, repo, or AI-built app"
          className={inputCls}
        />
        <p className="mt-1.5 text-xs text-foreground/55">
          Link to your hosted prototype, code repository, or AI-generated app
          (Lovable, v0, Glide, or code from scratch).
        </p>
        {errors.prototypeUrl && <p className={errCls}>{errors.prototypeUrl}</p>}
      </div>

      <div className="mt-5 rounded-xl border border-border bg-muted p-4 sm:p-5">
        <p className={labelCls}>Process brief: how you worked on it *</p>
        <p className="text-xs text-foreground/60">
          Attach the document (PDF, DOC, DOCX, TXT, MD, max 10MB) or paste a
          link to it (Google Doc, Notion, etc). At least one is required.
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bc-docfile" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-foreground/60">
              Upload file
            </label>
            <input
              id="bc-docfile"
              name="processDocFile"
              type="file"
              accept=".pdf,.doc,.docx,.txt,.md"
              onChange={(e) => setDocFile(e.target.files?.[0] ?? null)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-white"
            />
            {docFile && (
              <p className="mt-1.5 text-xs text-foreground/60">
                Selected: {docFile.name} ({(docFile.size / 1024).toFixed(0)} KB)
              </p>
            )}
          </div>
          <div>
            <label htmlFor="bc-doclink" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-foreground/60">
              Or paste doc link
            </label>
            <input
              id="bc-doclink"
              name="processDocLink"
              type="url"
              inputMode="url"
              value={processDocLink}
              onChange={(e) => setProcessDocLink(e.target.value)}
              placeholder="https://docs.google.com/..."
              className={inputCls}
            />
          </div>
        </div>
        {(errors.processDoc || errors.processDocLink) && (
          <p className={errCls}>
            {errors.processDoc ?? errors.processDocLink}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="bc-portfolio" className={labelCls}>
          Portfolio <span className="font-normal text-foreground/50">(optional)</span>
        </label>
        <input
          id="bc-portfolio"
          name="portfolioUrl"
          type="url"
          inputMode="url"
          value={portfolioUrl}
          onChange={(e) => setPortfolioUrl(e.target.value)}
          placeholder="https://github.com/you or your design files"
          className={inputCls}
        />
        {errors.portfolioUrl && <p className={errCls}>{errors.portfolioUrl}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="bc-statement" className={labelCls}>
          Statement of purpose *
        </label>
        <textarea
          id="bc-statement"
          name="statement"
          rows={5}
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          placeholder="Why do you want to join TIC and what do you hope to build here? (min 50 characters)"
          className={`${inputCls} min-h-28 resize-y`}
        />
        <div className="mt-1.5 flex justify-between text-xs text-foreground/55">
          <span>Short paragraph, honest and specific.</span>
          <span className="tabular-nums">{statement.trim().length}/2000</span>
        </div>
        {errors.statement && <p className={errCls}>{errors.statement}</p>}
      </div>

      <div className="mt-6">
        <p
          id="bc-agreements-label"
          className="mb-2 font-poppins text-sm font-semibold text-primary"
        >
          TIC agreements (all mandatory) *
        </p>
        <fieldset
          aria-labelledby="bc-agreements-label"
          className="rounded-xl border border-border bg-muted p-4 sm:p-5"
        >
          <div className="space-y-3">
            {AGREEMENTS.map((a) => (
              <label
                key={a.key}
                className="flex cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-background"
              >
                <input
                  type="checkbox"
                  checked={agreements[a.key]}
                  onChange={() => toggleAgreement(a.key)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#1E048B]"
                />
                <span className="text-sm leading-relaxed text-foreground/80">
                  {a.text}
                </span>
              </label>
            ))}
          </div>
          {errors.agreements && <p className={errCls}>{errors.agreements}</p>}
        </fieldset>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 w-full rounded-xl bg-secondary px-7 py-4 font-poppins text-base font-bold text-secondary-foreground transition hover:brightness-110 active:translate-y-px disabled:cursor-wait disabled:opacity-60"
      >
        {submitting ? "Submitting your build..." : "Submit my build"}
      </button>
      <p className="mt-3 text-center text-xs text-foreground/55">
        By submitting you confirm your prototype and writeup are your own work.
      </p>
    </form>
  );
}
