'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const RBZ_BANKS = [
  'AFC Commercial Bank','BancABC','CBZ Bank','Ecobank Zimbabwe','FBC Bank',
  'First Capital Bank','Metbank','Nedbank Zimbabwe','NMB Bank','POSB',
  'Stanbic Bank','Standard Chartered Bank','Steward Bank','ZB Bank',
]

export default function SupplierSignup() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '', surname: '', phone: '',
    paymentMethod: '', mobileMoneyProvider: '', mobileMoneyNumber: '',
    bank: '', accountNumber: '', password: '', confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({...prev, [name]: value }))
    if (name === 'mobileMoneyProvider' && value &&!formData.mobileMoneyNumber) {
      setFormData(prev => ({...prev, mobileMoneyNumber: prev.phone }))
    }
    if (name === 'paymentMethod') {
      setFormData(prev => ({...prev, bank: '', accountNumber: '', mobileMoneyProvider: '', mobileMoneyNumber: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password!== formData.confirmPassword) {
      alert('Passwords do not match'); return
    }
    setLoading(true)

    const email = `${formData.phone.replace(/[^0-9]/g, '')}@trendsell.co.zw`

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email, password: formData.password,
      options: { data: { phone: formData.phone, role: 'supplier' } }
    })

    if (authError) { alert(authError.message); setLoading(false); return }

    const { error: profileError } = await supabase.from('profiles').insert({
      user_id: authData.user?.id,
      role: 'supplier',
      name: formData.name,
      surname: formData.surname,
      phone: formData.phone,
      payment_method: formData.paymentMethod,
      mobile_money_provider: formData.mobileMoneyProvider || null,
      mobile_money_number: formData.mobileMoneyNumber || null,
      bank_name: formData.bank || null,
      account_number: formData.accountNumber || null,
    })

    setLoading(false)
    if (profileError) { alert('Profile save failed: ' + profileError.message); return }

    alert('Supplier account created!')
    router.push('/login')
  }

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/"><img src="/logo.jpg" alt="Trendsell" className="h-10 w-auto mx-auto" /></Link>
          <h1 className="mt-6 text-3xl font-extrabold text-[#0B3D2E]">Join as a Supplier</h1>
          <p className="mt-2 text-slate-700">List your wholesale products. Reach sellers across Zimbabwe.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div><label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition text-slate-900 placeholder:text-slate-400"
                  placeholder="John" /></div>
              <div><label className="block text-sm font-semibold text-slate-900 mb-2">Surname</label>
                <input type="text" name="surname" required value={formData.surname} onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition text-slate-900 placeholder:text-slate-400"
                  placeholder="Doe" /></div>
            </div>
            <div><label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition text-slate-900 placeholder:text-slate-400"
                placeholder="+263 77 123 4567" /></div>

            <div className="border-t border-stone-200 pt-6">
              <label className="block text-sm font-semibold text-slate-900 mb-3">How should we pay you?</label>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="radio" id="mobile-supp" name="paymentMethod" value="mobile" checked={formData.paymentMethod === 'mobile'} onChange={handleChange} className="w-5 h-5 text-[#0B3D2E] focus:ring-[#0B3D2E]" />
                  <label htmlFor="mobile-supp" className="ml-3 text-sm font-medium text-slate-900">Mobile Money</label>
                </div>
                {formData.paymentMethod === 'mobile' && (
                  <div className="ml-7 space-y-4">
                    <select name="mobileMoneyProvider" required value={formData.mobileMoneyProvider} onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition bg-white text-slate-900">
                      <option value="">Select provider</option>
                      <option value="Ecocash">Ecocash</option>
                      <option value="OneMoney">OneMoney</option>
                      <option value="InnBucks">InnBucks</option>
                    </select>
                    <div>
                      <input type="tel" name="mobileMoneyNumber" required value={formData.mobileMoneyNumber} onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition text-slate-900 placeholder:text-slate-400"
                        placeholder="Mobile Money Number" />
                      <p className="mt-1 text-xs text-slate-600">Defaults to your phone number. Change if different.</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center">
                  <input type="radio" id="bank-supp" name="paymentMethod" value="bank" checked={formData.paymentMethod === 'bank'} onChange={handleChange} className="w-5 h-5 text-[#0B3D2E] focus:ring-[#0B3D2E]" />
                  <label htmlFor="bank-supp" className="ml-3 text-sm font-medium text-slate-900">Bank Transfer</label>
                </div>
                {formData.paymentMethod === 'bank' && (
                  <div className="ml-7 space-y-4">
                    <select name="bank" required value={formData.bank} onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition bg-white text-slate-900">
                      <option value="">Select your bank</option>
                      {RBZ_BANKS.map(bank => (<option key={bank} value={bank}>{bank}</option>))}
                    </select>
                    {formData.bank && (
                      <div>
                        <input type="text" name="accountNumber" required value={formData.accountNumber} onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition text-slate-900 placeholder:text-slate-400"
                          placeholder="Account Number" />
                        <p className="mt-1 text-xs text-slate-600">USD or ZIG account - we'll match the currency</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-6 space-y-6">
              <div><label className="block text-sm font-semibold text-slate-900 mb-2">Create Password</label>
                <input type="password" name="password" required minLength={8} value={formData.password} onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition text-slate-900 placeholder:text-slate-400"
                  placeholder="Minimum 8 characters" /></div>
              <div><label className="block text-sm font-semibold text-slate-900 mb-2">Confirm Password</label>
                <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-stone-400 rounded-lg focus:ring-2 focus:ring-[#0B3D2E] focus:border-[#0B3D2E] outline-none transition text-slate-900 placeholder:text-slate-400"
                  placeholder="Re-enter password" /></div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-[#0B3D2E] text-white font-bold py-4 rounded-lg hover:bg-[#0a3427] transition-all duration-200 text-lg disabled:opacity-60">
              {loading? 'Creating...' : 'Create Supplier Account'}
            </button>
            <p className="text-center text-sm text-slate-700">Already have an account? <Link href="/login" className="text-[#0B3D2E] font-semibold hover:text-[#C9A44C]">Login</Link></p>
          </form>
        </div>
        <p className="text-center text-xs text-slate-600 mt-8">By signing up, you agree to our <Link href="/terms" className="underline hover:text-[#0B3D2E]">Terms and Conditions</Link></p>
      </div>
    </main>
  )
}
