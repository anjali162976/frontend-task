import { useState } from "react";
import logo from "../assets/logo.png"; // your black logo

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white px-5 sm:px-8 py-6">
      <div className="mx-auto max-w-[1240px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Positivus" className="h-10 w-auto" />
          <span className="text-2xl font-semibold text-[#191A23]">Positivus</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[#191A23] text-lg">
          <li className="cursor-pointer hover:opacity-70">About us</li>
          <li className="cursor-pointer hover:opacity-70">Services</li>
          <li className="cursor-pointer hover:opacity-70">Use Cases</li>
          <li className="cursor-pointer hover:opacity-70">Pricing</li>
          <li className="cursor-pointer hover:opacity-70">Blog</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block border border-[#191A23] px-7 py-4 rounded-2xl text-[#191A23] text-lg hover:bg-[#191A23] hover:text-white transition">
          Request a quote
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden border border-[#191A23] rounded-xl px-4 py-2 text-[#191A23]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden px-5 sm:px-8 pt-4">
          <div className="mx-auto max-w-[1240px] rounded-2xl border border-black/10 bg-white p-4">
            <ul className="flex flex-col gap-4 text-[#191A23] text-lg">
              <li className="cursor-pointer" onClick={() => setOpen(false)}>About us</li>
              <li className="cursor-pointer" onClick={() => setOpen(false)}>Services</li>
              <li className="cursor-pointer" onClick={() => setOpen(false)}>Use Cases</li>
              <li className="cursor-pointer" onClick={() => setOpen(false)}>Pricing</li>
              <li className="cursor-pointer" onClick={() => setOpen(false)}>Blog</li>
            </ul>

            <button
              className="mt-5 w-full border border-[#191A23] px-6 py-3 rounded-2xl text-[#191A23] text-lg hover:bg-[#191A23] hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}