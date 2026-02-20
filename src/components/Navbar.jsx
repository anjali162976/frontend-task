function Navbar() {
  return (
    <nav className="bg-white px-6 py-4 shadow-sm">
      
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-5xl font-bold">
          ✦ Positivus
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-black">About us</li>
          <li className="cursor-pointer hover:text-black">Services</li>
          <li className="cursor-pointer hover:text-black">Use Cases</li>
          <li className="cursor-pointer hover:text-black">Pricing</li>
          <li className="cursor-pointer hover:text-black">Blog</li>
        </ul>

        {/* Button */}
        <button className="border border-black px-4 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-black hover:text-white transition">
          Request a quote
        </button>

      </div>
    </nav>
  )
}

export default Navbar

