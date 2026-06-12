import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#0B3D2E]">
                Trend<span className="text-[#C9A44C]">sell</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#how-it-works" className="text-slate-700 hover:text-[#0B3D2E] font-medium">How it works</Link>
              <Link href="/login" className="px-5 py-2 bg-[#0B3D2E] text-white rounded-lg hover:bg-[#0a3427] font-medium transition">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-[#0B3D2E] tracking-tight leading-tight">
            ZIMBABWE'S<br/>
            <span className="text-[#C9A44C]">B2B MARKETPLACE</span>
          </h1>
          <div className="w-24 h-1 bg-[#C9A44C] mx-auto my-8"></div>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto font-medium">
            Suppliers list products at wholesale. Sellers start businesses with zero inventory.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/signup/supplier" 
              className="px-10 py-4 bg-[#0B3D2E] text-white font-bold rounded-lg shadow-lg hover:bg-[#0a3427] transition-all duration-200 text-lg uppercase tracking-wide"
            >
              Join as a Supplier
            </Link>
            <Link 
              href="/signup/seller" 
              className="px-10 py-4 bg-[#C9A44C] text-[#0B3D2E] font-bold rounded-lg shadow-lg hover:bg-[#b89643] transition-all duration-200 text-lg uppercase tracking-wide"
            >
              Join as a Seller
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 100" className="w-full h-20 fill-[#0B3D2E]">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>

      {/* Info Bar Section - inspired by poster */}
      <section id="how-it-works" className="bg-[#0B3D2E] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#C9A44C] rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#0B3D2E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7h1.05a2.5 2.5 0 014.9 0H19a1 1 0 011 1v8a1 1 0 01-1 1h-1.05a2.5 2.5 0 01-4.9 0H13a1 1 0 01-1-1V7z" />
                </svg>
              </div>
              <p className="font-bold text-[#C9A44C] text-sm">SECURE</p>
              <p className="text-sm mt-1">Escrow Payments</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#C9A44C] rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#0B3D2E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-bold text-[#C9A44C] text-sm">FAST</p>
              <p className="text-sm mt-1">Same-day Dispatch</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#C9A44C] rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#0B3D2E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.616 1.073 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.616-1.073-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-bold text-[#C9A44C] text-sm">LOCAL</p>
              <p className="text-sm mt-1">USD & ZIG Support</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#C9A44C] rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#0B3D2E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-bold text-[#C9A44C] text-sm">SUPPORT</p>
              <p className="text-sm mt-1">WhatsApp Helpline</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0B3D2E]">HOW IT WORKS</h2>
            <div className="w-20 h-1 bg-[#C9A44C] mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-4">For Suppliers</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <span className="text-[#C9A44C] font-bold mr-3">1.</span>
                  List your wholesale products with pricing and stock levels
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9A44C] font-bold mr-3">2.</span>
                  Sellers across Zimbabwe market your products to their customers
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9A44C] font-bold mr-3">3.</span>
                  You ship bulk orders to Trendsell. We handle last-mile delivery
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9A44C] font-bold mr-3">4.</span>
                  Get paid securely within 48 hours of delivery confirmation
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-4">For Sellers</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <span className="text-[#C9A44C] font-bold mr-3">1.</span>
                  Browse thousands of wholesale products. Pick what you want to sell
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9A44C] font-bold mr-3">2.</span>
                  Set your own retail price. Share product links on WhatsApp/Facebook
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9A44C] font-bold mr-3">3.</span>
                  Customer pays Trendsell. We tell you + the supplier to fulfill
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9A44C] font-bold mr-3">4.</span>
                  Your profit is paid out instantly. No inventory risk ever
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gold CTA Banner */}
      <section className="bg-[#C9A44C] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] uppercase">
            YOU ARE INVITED!
          </h2>
          <p className="mt-4 text-[#0B3D2E] text-lg font-medium">
            TOGETHER, LET'S BUILD ZIMBABWE'S DIGITAL WHOLESALE ECONOMY
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup/supplier" 
              className="px-8 py-4 bg-[#0B3D2E] text-white font-bold rounded-lg hover:bg-[#0a3427] transition uppercase tracking-wide"
            >
              Join as a Supplier
            </Link>
            <Link 
              href="/signup/seller" 
              className="px-8 py-4 bg-white text-[#0B3D2E] font-bold rounded-lg hover:bg-stone-100 transition uppercase tracking-wide"
            >
              Join as a Seller
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B3D2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="text-2xl font-bold">
                Trend<span className="text-[#C9A44C]">sell</span>
              </span>
              <p className="mt-4 text-sm text-stone-300">
                Zimbabwe's trusted B2B marketplace.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#C9A44C] uppercase text-sm tracking-wider">Company</h3>
              <ul className="mt-4 space-y-3">
                <li><Link href="#how-it-works" className="text-sm text-stone-300 hover:text-white">How it works</Link></li>
                <li><Link href="/about" className="text-sm text-stone-300 hover:text-white">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#C9A44C] uppercase text-sm tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li><Link href="/terms" className="text-sm text-stone-300 hover:text-white">Terms and Conditions</Link></li>
                <li><Link href="/privacy" className="text-sm text-stone-300 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#C9A44C] uppercase text-sm tracking-wider">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="mailto:info@trendsell.co.zw" className="text-sm text-stone-300 hover:text-[#C9A44C]">
                    info@trendsell.co.zw
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/263777803517" target="_blank" className="text-sm text-stone-300 hover:text-[#C9A44C]">
                    WhatsApp: +263 777 803 517
                  </a>
                </li>
                <li>
                  <a href="tel:+263777803517" className="text-sm text-stone-300 hover:text-[#C9A44C]">
                    Call: +263 777 803 517
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#0a3427]">
            <p className="text-center text-sm text-stone-400">
              © 2026 Trendsell.co.zw. All rights reserved. Harare, Zimbabwe.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
