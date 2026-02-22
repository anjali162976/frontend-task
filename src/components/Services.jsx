import seo from "../assets/img2.svg";    
import click from "../assets/click.png";  

function Card({ title, bg, img, dark }) {
  return (
    <div
      className={[
        "w-full rounded-[40px] border border-[#191A23]",
        "px-10 py-10 md:px-12 md:py-12",
        "flex items-center justify-between gap-10",
        "shadow-[0px_8px_0px_0px_#191A23]", 
        bg,
      ].join(" ")}
    >
      {/* Left */}
      <div className="min-w-[220px]">
        <h3 className="text-3xl font-semibold leading-snug">
          <span className={`${dark ? "bg-white" : "bg-[#B9FF66]"} px-3 py-1 rounded-lg`}>
            {title}
          </span>
        </h3>

        <button className="mt-8 flex items-center gap-4 text-lg font-medium">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-[#191A23]">
            {/* arrow icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="#B9FF66"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={dark ? "text-white" : "text-[#191A23]"}>Learn more</span>
        </button>
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-end">
        <img src={img} alt={title} className="max-w-[320px] w-full h-auto" />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-white px-5 sm:px-8 py-16">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <span className="inline-block bg-[#B9FF66] px-6 py-3 rounded-xl text-2xl font-semibold text-[#191A23] w-fit">
            Services
          </span>
          <p className="text-[#191A23] text-lg opacity-80 max-w-[650px]">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card
            title={
              <>
                Search engine <br /> optimization
              </>
            }
            bg="bg-white"
            img={seo}
            dark={false}
          />

          <Card
            title={
              <>
                Pay-per-click <br /> advertising
              </>
            }
            bg="bg-[#B9FF66]"
            img={click}
            dark={false}
          />
        </div>
      </div>
    </section>
  );
}