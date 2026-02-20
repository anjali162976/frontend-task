function Testimonials() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-16 mb-20">
        <h2 className="bg-[#B9FF66] text-[#191A23] px-8 py-2 rounded-xl font-semibold text-5xl">
           Testimonials
        </h2>
        <p className="text-[#191A23] max-w-[500px] mt-6 md:mt-0 opacity-70 text-2xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
      <section className="px-8 pt-24 pb-12 bg-[#191A23] text-white rounded-[40px]">

{/* Testimonial Wrapper */}
<div className="flex gap-8 overflow-hidden">

        {/* Card 1 */}
        <div className="border border-[#B9FF66] rounded-3xl p-8 max-w-xl">
          <p className="text-lg leading-relaxed mb-6">
            “We have been working with Positivus for the past year and have seen
            a significant increase in website traffic and leads. Their team is
            professional, responsive, and truly cares about our success.”
          </p>

          <div>
            <p className="font-semibold text-[#B9FF66]">
              John Smith
            </p>
            <p className="text-sm text-gray-400">
              Marketing Director at XYZ Corp
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="hidden md:block border border-gray-600 rounded-3xl p-8 max-w-xl opacity-60">
          <p className="text-lg leading-relaxed mb-6">
           “We have been working with Positivus for the past year and have seen
            a significant increase in website traffic and leads. Their team is
            professional, responsive, and truly cares about our success.”
          </p>

          <div>
            <p className="font-semibold text-[#B9FF66]">
               John Smith
            </p>
            <p className="text-sm text-gray-400">
             Marketing Director at XYZ Corp
            </p>
          </div>
        </div>

    </div>

    {/* Navigation Dots */}
    <div className="flex justify-center gap-3 mt-10">
      <div className="w-3 h-3 bg-[#B9FF66] rounded-full"></div>
      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
    </div>

    </section>
    </div>
  )
}

export default Testimonials



