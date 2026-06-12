'use client'

import { useState } from 'react'
import Link from 'next/link'

const RBZ_BANKS = [
  'AFC Commercial Bank',
  'BancABC',
  'CBZ Bank',
  'Ecobank Zimbabwe',
  'FBC Bank',
  'First Capital Bank',
  'Metbank',
  'Nedbank Zimbabwe',
  'NMB Bank',
  'POSB',
  'Stanbic Bank',
  'Standard Chartered Bank',
  'Steward Bank',
  'ZB Bank',
]

export default function SellerSignup() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    storeName: '',
    paymentMethod: '',
    mobileMoneyProvider: '',
    bank: '',
    accountNumber: '',
    password: '',
    confirmPassword: '',
  })

  const [showAccountNumber, setShowAccountNumber] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({...prev, [name]: value }))
    
    if (name === 'bank') {
      setShowAccountNumber(value!== '')
    }
    if (name === 'paymentMethod') {
      setShowAccountNumber(false)
      setFormData(prev => ({...prev, bank: '', mobileMoneyProvider: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password!== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    
    console.log('Seller signup:', formData)
    alert('Signup submitted! We will connect this to the database next.')
  }

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <img 
              src="/logo.jpg" 
              alt="Trendsell" 
              className="h-10 w-auto mx-auto"
            />
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold text-[#0B3D2E]">
            Join as a Seller
          </h1>
          <p className="mt-2 text-slate-600">
            Start selling without inventory. Set up your account in 2 minutes.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name + Surname */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  required
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition"
                placeholder="+263 77 123 4567"
              />
            </div>

            {/* Store Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Store Name
              </label>
              <input
                type="text"
                name="storeName"
                required
                value={formData.storeName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition"
                placeholder="e.g. John's Electronics"
              />
              <p className="mt-1 text-xs text-slate-500">This is what customers will see</p>
            </div>

            {/* Payment Method */}
            <div className="border-t border-stone-200 pt-6">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                How should we pay you?
              </label>
              
              <div className="space-y-4">
                {/* Mobile Money Option */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="mobile"
                    name="paymentMethod"
                    value="mobile"
                    checked={formData.paymentMethod === 'mobile'}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#0B3D2E] focus:ring-[#0B3D2E]"
                  />
                  <label htmlFor="mobile" className="ml-3 text-sm font-medium text-slate-900">
                    Mobile Money
                  </label>
                </div>

                {formData.paymentMethod === 'mobile' && (
                  <div className="ml-7">
                    <select
                      name="mobileMoneyProvider"
                      required
                      value={formData.mobileMoneyProvider}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select provider</option>
                      <option value="Ecocash">Ecocash</option>
                      <option value="OneMoney">OneMoney</option>
                      <option value="InnBucks">InnBucks</option>
                    </select>
                    <p className="mt-1 text-xs text-slate-500">
                      We'll send payments to your registered number: {formData.phone || '+263...'}
                    </p>
                  </div>
                )}

                {/* Bank Option */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#0B3D2E] focus:ring-[#0B3D2E]"
                  />
                  <label htmlFor="bank" className="ml-3 text-sm font-medium text-slate-900">
                    Bank Transfer
                  </label>
                </div>

                {formData.paymentMethod === 'bank' && (
                  <div className="ml-7 space-y-4">
                    <select
                      name="bank"
                      required
                      value={formData.bank}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select your bank</option>
                      {RBZ_BANKS.map(bank => (
                        <option key={bank} value={bank}>{bank}</option>
                      ))}
                    </select>

                    {showAccountNumber && (
                      <div>
                        <input
                          type="text"
                          name="accountNumber"
                          required
                          value={formData.accountNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition"
                          placeholder="Account Number"
                        />
                        <p className="mt-1 text-xs text-slate-500">
                          USD or ZIG account - we'll match the currency
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Passwords */}
            <div className="border-t border-stone-200 pt-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Create Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition"
                  placeholder="Minimum 8 characters"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent outline-none transition"
                  placeholder="Re-enter password"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#0B3D2E] text-white font-bold py-4 rounded-lg hover:bg-[#0a3427] transition-all duration-200 text-lg"
            >
              Create Seller Account
            </button>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="text-[#0B3D2E] font-semibold hover:text-[#C9A44C]">
                Login
              </Link>
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-[#0B3D2E]">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </main>
  )
}
