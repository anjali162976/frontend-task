function Footer() {
  return (
    <footer className="bg-[#191A23] text-white px-6 md:px-8 py-16 rounded-[40px] mt-16">

      <div className="max-w-[1200px] mx-auto">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-6">✦ Positivus</h3>

            <h3 className="text-lg font-semibold mb-4">
              <span className="bg-[#B9FF66] text-black px-3 py-1 rounded-md">
                Contact Us:
              </span>
            </h3>

            <p className="mt-4 text-sm opacity-70 leading-7">
              Email: info@positivus.com<br />
              Phone: 222-555-1234<br />
              Address: 123 Main St, Anytown, USA
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 underline text-gray-300 text-sm md:text-base text-center md:text-left">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>

          {/* Newsletter */}
          {/* <div className="bg-[#2A2B35] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-500 rounded-xl px-6 py-4 w-full md:w-72 outline-none"
            />

            <button className="bg-[#B9FF66] text-black px-8 py-4 rounded-xl font-semibold w-full md:w-auto">
              Subscribe to news
            </button>
          </div>

        </div> */}

        <div className="bg-[#2A2B35] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 w-full">
  
  <input
    type="email"
    placeholder="Email"
    className="bg-transparent border border-gray-500 rounded-xl px-6 py-4 w-full md:flex-1 outline-none"
  />

  <button className="bg-[#B9FF66] text-black px-8 py-4 rounded-xl font-semibold w-full md:w-auto">
    Subscribe to news
  </button>

</div>
 </div>
        {/* Bottom Footer */}
       {/* Bottom Footer */}
<div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
  
  <div className="flex items-center gap-6">
    <p>© 2026 Positivus. All Rights Reserved.</p>
    <a href="#" className="underline">
      Privacy Policy
    </a>
  </div>

</div>
      </div>
    </footer>
  )
}

export default Footer