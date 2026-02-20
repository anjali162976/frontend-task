import seo from "../assets/img2.svg"
import ppc from "../assets/img3.webp"

function Services() {
  return (
    <section className="bg-[#F3F3F3] py-15 px-10">
      {/* <div className="max-w-[1200px] mx-auto"> */}

        {/* HEADER */}
       <div className="flex flex-col md:flex-row md:items-center gap-16 mb-20">
  <h2 className="bg-[#B9FF66] text-[#191A23] px-8 py-2 rounded-xl font-bold text-3xl">
    Services
  </h2>

  <p className="text-[#191A23] max-w-[500px] mt-6 md:mt-0 opacity-70 text-2xl">
    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
  </p>
</div>


        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <div className="bg-white px-10 py-8 rounded-[35px] border border-black flex justify-between items-center min-h-[200px]">
            <div>
              <h3 className="text-3xl font-semibold text-[#191A23] leading-snug">
  <span className="bg-[#B9FF66] px-2 py-1 rounded-md">
    Search engine<br/>
      optimization</span>
</h3>


              <button className="mt-8 flex items-center gap-2 text-large font-bold">
                <span>Learn more</span> →
              </button>
            </div>

            <div className="w-[300px]">
              <img src={seo} alt="SEO" className="w-full" />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#B9FF66] px-10 py-8 rounded-[30px] border border-black flex justify-between items-center min-h-[200px]">
            <div>
              <h3 className="text-3xl font-semibold text-[#191A23] leading-snug">
  <span className="bg-white text-black px-2 py-1 rounded-md">
    Pay-per-click <br/>advertising</span>
</h3>


              <button className="mt-8 flex items-center gap-2 text-large font-bold">
                <span>Learn more</span> →
              </button>
            </div>

            <div className="w-[300px]">
              <img src={ppc} alt="PPC" className="w-full" />
            </div>
          </div>

        </div>

      {/* </div> */}
    </section>
  )
}

export default Services

