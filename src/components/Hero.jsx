import horn from "../assets/horn.avif"
function Hero() {
  return (
    <>
      <section className="px-8 pt-24 pb-12">

        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

          {/* LEFT SIDE */}
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-[#191A23] leading-tight">
              Navigating the digital landscape for success
            </h1>

            <p className="mt-8 text-[#191A23] text-2xl opacity-70 max-w-lg">
              Our digital marketing agency helps businesses grow and succeed online
              through SEO, PPC, social media marketing, and content creation.
            </p>

            <button className="mt-10 bg-[#191A23] text-white px-8 py-4 rounded-xl text-2xl font-medium hover:bg-black transition">
              Book a consultation
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={horn}
              alt="Megaphone Illustration"
              className="w-[480px]"
            />
          </div>

        </div>
      </section>

      {/* BRAND LOGOS */}
      <div className="px-8 py-12">


        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center text-[#191A23] opacity-90 text-2xl font-bold">

          <span className="font-semibold tracking-wide">amazon</span>
          <span className="italic">dribbble</span>
          <span className="font-bold">HubSpot</span>
          <span className="tracking-widest">Notion</span>
          <span className="font-bold">Netflix</span>
          <span className="uppercase">Zoom</span>


        </div>
      </div>
    </>
  )
}

export default Hero;

// import horn from "../assets/horn.webp";

// function Hero() {
//   return (
//     <>
//       <section className="px-4 py-10 flex flex-col items-center text-center">

//         {/* Heading */}
//         <h1 className="text-3xl font-bold text-[#191A23] leading-snug">
//           Navigating the digital landscape for success
//         </h1>

//         {/* Paragraph */}
//         <p className="mt-4 text-sm text-gray-600 max-w-xs">
//           Our digital marketing agency helps businesses grow and succeed online 
//           through SEO, PPC, social media marketing, and content creation.
//         </p>

//         {/* Button */}
//         <button className="mt-6 bg-[#191A23] text-white px-6 py-3 rounded-xl text-sm w-full max-w-xs">
//           Book a consultation
//         </button>

//         {/* Horn Image */}
//         <div className="mt-8">
//           <img 
//             src={horn} 
//             alt="Horn" 
//             className="w-64 mx-auto"
//           />
//         </div>

//       </section>

//       {/* Brand Logos */}
//       <div className="px-4 py-6 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
//         <span>amazon</span>
//         <span>dribbble</span>
//         <span>HubSpot</span>
//         <span>Notion</span>
//         <span>Netflix</span>
//         <span>Zoom</span>
//       </div>
//     </>
//   );
// }

// export default Hero;
