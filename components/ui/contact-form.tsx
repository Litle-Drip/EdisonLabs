'use client'

import { useState, useRef } from 'react'
import { SITE } from '@/lib/constants'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  function validate(data: FormData): Record<string, string> {
    const errs: Record<string, string> = {}
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const message = (data.get('message') as string)?.trim()

    if (!name) errs.name = 'Name is required.'
    if (!email) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.'
    if (!message) errs.message = 'Message is required.'
    else if (message.length < 10) errs.message = 'Message must be at least 10 characters.'

    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setState('submitting')

    const name = (data.get('name') as string).trim()
    const email = (data.get('email') as string).trim()
    const message = (data.get('message') as string).trim()

    try {
      // Try Formspree if an endpoint is configured
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
        if (res.ok) {
          setState('success')
          formRef.current?.reset()
          return
        }
      }

      // Fallback: open mailto in a new tab with form data pre-filled
      const subject = encodeURIComponent(`Message from ${name} via Edison Labs`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
      window.open(`mailto:${SITE.email}?subject=${subject}&body=${body}`)
      setState('success')
      formRef.current?.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-card-bg border border-[var(--accent-border-hover)] rounded-card min-h-[320px]">
        {/* Checkmark */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--accent-soft)] border border-[var(--accent-border-hover)] text-accent mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message sent</h3>
        <p className="text-text-muted text-sm leading-relaxed max-w-[320px] mb-6">
          {process.env.NEXT_PUBLIC_FORMSPREE_ID
            ? "We've received your message and will be in touch soon."
            : 'Your email client has been opened with your message pre-filled. Send it to complete your message.'}
        </p>
        <button
          onClick={() => setState('idle')}
          className="text-accent text-sm font-medium hover:text-white transition-colors duration-150 underline-offset-2 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold text-text-muted uppercase tracking-[0.08em] mb-2">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={`w-full bg-bg border rounded-btn px-4 py-3 text-sm text-white placeholder-[var(--text-muted)] focus:outline-none transition-colors duration-150 ${
            errors.name
              ? 'border-red-500/60 focus:border-red-400'
              : 'border-border-default focus:border-[var(--accent-border-hover)]'
          }`}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-xs font-semibold text-text-muted uppercase tracking-[0.08em] mb-2">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={`w-full bg-bg border rounded-btn px-4 py-3 text-sm text-white placeholder-[var(--text-muted)] focus:outline-none transition-colors duration-150 ${
            errors.email
              ? 'border-red-500/60 focus:border-red-400'
              : 'border-border-default focus:border-[var(--accent-border-hover)]'
          }`}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-text-muted uppercase tracking-[0.08em] mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="What would you like to say?"
          className={`w-full bg-bg border rounded-btn px-4 py-3 text-sm text-white placeholder-[var(--text-muted)] focus:outline-none transition-colors duration-150 resize-none ${
            errors.message
              ? 'border-red-500/60 focus:border-red-400'
              : 'border-border-default focus:border-[var(--accent-border-hover)]'
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Error banner */}
      {state === 'error' && (
        <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-btn text-sm text-red-400">
          Something went wrong. Please try emailing us directly at{' '}
          <a href={`mailto:${SITE.email}`} className="underline hover:text-red-300 transition-colors">
            {SITE.email}
          </a>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-accent text-white text-sm font-semibold rounded-btn transition-all duration-200 hover:bg-[#5ab4ff] focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </button>

      <p className="text-xs text-text-muted text-center opacity-70">
        Or email us directly at{' '}
        <a href={`mailto:${SITE.email}`} className="text-accent hover:text-white transition-colors duration-150">
          {SITE.email}
        </a>
      </p>
    </form>
  )
}
