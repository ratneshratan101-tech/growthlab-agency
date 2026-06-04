'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')
    // Simulate API call — replace with your form backend (Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Form data:', data)
    setStatus('success')
    reset()
    setTimeout(() => setStatus('idle'), 5000)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-gray-400 max-w-sm">
          Thanks for reaching out. Our team will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className={compact ? 'grid grid-cols-1 gap-5' : 'grid grid-cols-1 sm:grid-cols-2 gap-5'}>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Min 2 characters' } })}
            type="text"
            placeholder="Jane Smith"
            className="input-field"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
            type="email"
            placeholder="jane@company.com"
            className="input-field"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className={compact ? 'grid grid-cols-1 gap-5' : 'grid grid-cols-1 sm:grid-cols-2 gap-5'}>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Company / Brand</label>
          <input
            {...register('company')}
            type="text"
            placeholder="Your Company"
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          Service Interested In
        </label>
        <select {...register('service')} className="input-field">
          <option value="">Select a service...</option>
          <option value="social-media">Social Media Management</option>
          <option value="reels">Reels & Video Production</option>
          <option value="paid-ads">Paid Advertising (Meta/Google)</option>
          <option value="seo">SEO & Content Marketing</option>
          <option value="influencer">Influencer Marketing</option>
          <option value="brand">Brand Strategy & Identity</option>
          <option value="other">Other / Full Package</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 20, message: 'Please provide more detail (min 20 chars)' },
          })}
          rows={compact ? 4 : 5}
          placeholder="Tell us about your brand, goals, and what you're looking to achieve..."
          className="input-field resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Message
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We typically respond within 24 hours. No spam, ever.
      </p>
    </form>
  )
}
