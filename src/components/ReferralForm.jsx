import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import Button from './ui/Button'
import { company } from '../data/site'
import {
  relationshipOptions,
  agreedOptions,
  countyOptions,
  projectTypeOptions,
  budgetOptions,
  timelineOptions,
  insuranceOptions,
} from '../data/referral'

const inputClass =
  'w-full rounded-xl border border-brand-100 bg-cream/40 px-4 py-3 text-ink placeholder:text-ink/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200'

const labelClass = 'mb-1.5 block text-sm font-medium text-ink/80'

const isConfigured = () => !company.formEndpoint.includes('your-form-id')

function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  )
}

function Select({ name, options, placeholder = 'Select one', required }) {
  return (
    <select name={name} required={required} defaultValue="" className={inputClass}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  )
}

export default function ReferralForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (!data.get('referralPhone') && !data.get('referralEmail')) {
      alert('Please provide a phone number or email for the referred client.')
      return
    }

    if (!isConfigured()) {
      const lines = []
      data.forEach((value, key) => value && lines.push(`${key}: ${value}`))
      const subject = encodeURIComponent('New Referral — Refer a Project')
      const body = encodeURIComponent(lines.join('\n'))
      window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`
      return
    }

    try {
      setStatus('sending')
      const res = await fetch(company.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[2rem] border border-brand-100 bg-white p-10 text-center shadow-card">
        <FiCheckCircle className="mx-auto h-12 w-12 text-brand-600" />
        <h3 className="mt-4 text-2xl text-ink">Thank you for the introduction</h3>
        <p className="mt-3 text-ink/70">
          Your referral has been sent to VCS. We will review the project and reach out about next
          steps.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-brand-100 bg-white p-7 shadow-card sm:p-10"
    >
      
      <h3 className="text-lg font-semibold text-ink">Your Information</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" required>
          <input name="referrerName" type="text" required className={inputClass} />
        </Field>
        <Field label="Your Phone Number">
          <input name="referrerPhone" type="tel" className={inputClass} />
        </Field>
        <Field label="Your Email Address" required>
          <input name="referrerEmail" type="email" required className={inputClass} />
        </Field>
        <Field label="Your Relationship with VCS">
          <Select name="referrerRelationship" options={relationshipOptions} />
        </Field>
        <label className="block sm:col-span-2">
          <span className={labelClass}>How do you know the referral?</span>
          <input name="howYouKnow" type="text" className={inputClass} />
        </label>
      </div>

      
      <h3 className="mt-9 text-lg font-semibold text-ink">Referred Client Information</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Referral First Name" required>
          <input name="referralFirstName" type="text" required className={inputClass} />
        </Field>
        <Field label="Referral Last Name" required>
          <input name="referralLastName" type="text" required className={inputClass} />
        </Field>
        <Field label="Referral Phone Number">
          <input name="referralPhone" type="tel" className={inputClass} placeholder="Provide phone or email" />
        </Field>
        <Field label="Referral Email Address">
          <input name="referralEmail" type="email" className={inputClass} placeholder="Provide phone or email" />
        </Field>
        <Field label="Has the referral agreed to be contacted by VCS?" required>
          <Select name="referralAgreed" options={agreedOptions} required />
        </Field>
      </div>

      
      <h3 className="mt-9 text-lg font-semibold text-ink">Project Information</h3>
      <p className="mt-1 text-sm text-ink/50">Provide whatever you know — none of these are required.</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Address">
          <input name="projectAddress" type="text" className={inputClass} />
        </Field>
        <Field label="City">
          <input name="projectCity" type="text" className={inputClass} />
        </Field>
        <Field label="County">
          <Select name="projectCounty" options={countyOptions} />
        </Field>
        <Field label="Project Type">
          <Select name="projectType" options={projectTypeOptions} />
        </Field>
        <Field label="Estimated Budget">
          <Select name="projectBudget" options={budgetOptions} />
        </Field>
        <Field label="Desired Timeline">
          <Select name="projectTimeline" options={timelineOptions} />
        </Field>
        <label className="block sm:col-span-2">
          <span className={labelClass}>Briefly describe the project</span>
          <textarea name="projectDescription" rows="4" className={inputClass} />
        </label>
      </div>

      
      <h3 className="mt-9 text-lg font-semibold text-ink">Insurance / Claim Review</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Is this project related to an insurance or storm-damage claim?">
          <Select name="insuranceRelated" options={insuranceOptions} />
        </Field>
        <label className="block">
          <span className={labelClass}>If yes or unsure, briefly explain</span>
          <input name="insuranceNote" type="text" className={inputClass} />
        </label>
      </div>
      <p className="mt-3 rounded-2xl bg-brand-50 px-5 py-3 text-xs text-ink/70">
        Projects involving property insurance proceeds may be restricted or excluded from referral
        reward eligibility. VCS may still review the project, but no reward will be approved unless
        payment is legally permitted.
      </p>

      
      <label className="mt-8 flex items-start gap-3">
        <input name="acknowledgement" type="checkbox" required className="mt-1 h-5 w-5 rounded border-brand-200 text-brand-600 focus:ring-brand-400" />
        <span className="text-sm text-ink/70">
          By submitting this referral, I confirm the information is accurate to the best of my
          knowledge and that I have permission to share the referred person’s contact information with
          Victory Construction Services. I understand that submitting a referral does not guarantee
          project acceptance or payment of a reward, which is subject to VCS review, an executed
          contract, required funding, program terms, and applicable law.
        </span>
      </label>

      <div className="mt-8">
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit Referral'}
        </Button>
        {status === 'error' && (
          <p className="mt-3 text-sm text-brand-700">
            Something went wrong. Please try again, or email {company.email}.
          </p>
        )}
      </div>
    </form>
  )
}
