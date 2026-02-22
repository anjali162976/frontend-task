import horn from "../assets/horn.png";
import amazon from "../assets/amazon.png";
import dribble from "../assets/dribble.png";
import hubspot from "../assets/hubspot.png";
import notion from "../assets/notion.png";
import netflix from "../assets/netflix.png";
import zoom from "../assets/zoom.png";

export default function Hero() {
  return (
    <section className="bg-white px-5 sm:px-8 pt-10 sm:pt-14 pb-10">
      <div className="mx-auto max-w-[1240px]">
        {/* HERO */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left */}
          <div className="w-full lg:w-[520px]">
            <h1 className="text-[38px] sm:text-[46px] lg:text-[56px] leading-[1.05] font-bold text-[#191A23]">
              Navigating the <br />
              digital landscape <br />
              for success
            </h1>

            <p className="mt-6 sm:mt-8 text-[#191A23] text-base sm:text-lg leading-7 opacity-80 max-w-[460px]">
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media marketing,
              and content creation.
            </p>

            <button className="mt-8 sm:mt-10 bg-[#191A23] text-white px-7 sm:px-8 py-4 rounded-2xl text-base sm:text-lg hover:opacity-90 transition">
              Book a consultation
            </button>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[620px] flex justify-center">
            <img
              src={horn}
              alt="Megaphone"
              className="w-full max-w-[520px] sm:max-w-[620px]"
            />
          </div>
        </div>

        {/* BRANDS */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-6 opacity-70">
          <img src={amazon} alt="Amazon" className="h-8 sm:h-9 object-contain" />
          <img src={dribble} alt="Dribble" className="h-8 sm:h-9 object-contain" />
          <img src={hubspot} alt="HubSpot" className="h-8 sm:h-9 object-contain" />
          <img src={notion} alt="Notion" className="h-8 sm:h-9 object-contain" />
          <img src={netflix} alt="Netflix" className="h-8 sm:h-9 object-contain" />
          <img src={zoom} alt="Zoom" className="h-8 sm:h-9 object-contain" />
        </div>
      </div>
    </section>
  );
}