import logoWhite from "../assets/logo white.png"; 

export default function Footer() {
  return (
    <footer className="relative bg-[#191A23] text-white px-6 sm:px-10 py-14 rounded-[40px] mt-20">
      <div className="max-w-[1240px] mx-auto">

       
<div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">


  <div className="flex flex-col items-center gap-6 md:items-start">
    {/* Logo */}
    <div className="flex items-center gap-3">
      <img src={logoWhite} alt="Positivus" className="h-8 w-auto" />
      <span className="text-2xl font-semibold">Positivus</span>
    </div>

    {/* Links */}
    <div className="flex flex-col items-center text-center gap-3 md:flex-row md:gap-8 md:text-left text-sm underline underline-offset-4 opacity-90">
      <a href="#">About us</a>
      <a href="#">Services</a>
      <a href="#">Use Cases</a>
      <a href="#">Pricing</a>
      <a href="#">Blog</a>
    </div>
  </div>


{/* Social Icons - Desktop only */}
<div className="hidden md:flex items-center gap-5 text-xl">
  <a href="#" className="hover:text-[#B9FF66] transition">
    <i className="fa-brands fa-linkedin"></i>
  </a>
  <a href="#" className="hover:text-[#B9FF66] transition">
    <i className="fa-brands fa-facebook"></i>
  </a>
  <a href="#" className="hover:text-[#B9FF66] transition">
    <i className="fa-brands fa-twitter"></i>
  </a>
</div>
</div>
        {/* Subscribe */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          
          {/* Contact */}
          <div className="max-w-[360px]">
            <span className="bg-[#B9FF66] text-[#191A23] px-4 py-1 rounded-md font-medium">
              Contact us:
            </span>

            <div className="mt-4 text-sm space-y-2 opacity-80">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St<br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Subscribe Box */}
          <div className="bg-white/5 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 w-full lg:w-[520px]">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 rounded-xl bg-transparent border border-white/40 text-white outline-none"
            />
            <button className="bg-[#B9FF66] text-[#191A23] px-6 py-3 rounded-xl font-medium">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Social Icons - Mobile only  */}
<div className="flex md:hidden items-center justify-center gap-5 text-xl mt-8">
  <a href="#" className="hover:text-[#B9FF66] transition">
    <i className="fa-brands fa-linkedin"></i>
  </a>
  <a href="#" className="hover:text-[#B9FF66] transition">
    <i className="fa-brands fa-facebook"></i>
  </a>
  <a href="#" className="hover:text-[#B9FF66] transition">
    <i className="fa-brands fa-twitter"></i>
  </a>
</div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Bottom Row */}
       <div className="flex items-center justify-between text-sm opacity-80">
  <div className="flex items-center gap-6">
    <p>© 2023 Positivus. All Rights Reserved.</p>
    <a href="#" className="underline underline-offset-4">
      Privacy Policy
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}
