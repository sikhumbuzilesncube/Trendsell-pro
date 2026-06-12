import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">
                Trend<span className="text-teal-500">sell</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium">How it works</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-slate-900 font-medium">Pricing</Link>
              <Link href="/login" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight">
              Zimbabwe's Wholesale Marketplace
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Trendsell connects suppliers with resellers. List products at wholesale. 
              Start selling without inventory. Scale your business faster.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup/supplier" 
                className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-200 text-lg"
              >
                Join as a Supplier
              </Link>
              <Link 
                href="/signup/seller" 
                className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-200 text-lg"
              >
                Join as a Seller
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Built for how business works in Zimbabwe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">For Suppliers</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Access a network of motivated sellers. Move bulk stock without running ads. 
                Secure escrow payments on every order.
              </p>
            </div>
            
            <div>
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">For Sellers</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Launch with $0 inventory. Test trending products risk-free. 
                We handle warehousing and delivery. You focus on sales.
              </p>
            </div>
            
            <div>
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Secure & Local</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                USD & ZIG payments. Real-time order tracking. WhatsApp support. 
                Built for Zimbabwe, by people who understand the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to grow your business?</h2>
          <p className="mt-4 text-slate-300 text-lg">
            Join hundreds of suppliers and sellers already on Trendsell.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup/supplier" 
              className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-200"
            >
              Join as a Supplier
            </Link>
            <Link 
              href="/signup/seller" 
              className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-400 transition-all duration-200"
            >
              Join as a Seller
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="text-xl font-bold text-slate-900">
                Trend<span className="text-teal-500">sell</span>
              </span>
              <p className="mt-4 text-sm text-slate-600">
                Zimbabwe's B2B marketplace for suppliers and resellers.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900">Company</h3>
              <ul className="mt-4 space-y-3">
                <li><Link href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900">How it works</Link></li>
                <li><Link href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</Link></li>
                <li><Link href="/about" className="text-sm text-slate-600 hover:text-slate-900">About</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li><Link href="/terms" className="text-sm text-slate-600 hover:text-slate-900">Terms and Conditions</Link></li>
                <li><Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="mailto:info@trendsell.co.zw" className="text-sm text-slate-600 hover:text-teal-600">
                    info@trendsell.co.zw
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/263777803517" target="_blank" className="text-sm text-slate-600 hover:text-teal-600">
                    WhatsApp: +263 777 803 517
                  </a>
                </li>
                <li>
                  <a href="tel:+263777803517" className="text-sm text-slate-600 hover:text-teal-600">
                    Call: +263 777 803 517
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-center text-sm text-slate-500">
              © 2026 Trendsell. All rights reserved. Built in Harare, Zimbabwe.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
