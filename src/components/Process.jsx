function Process() {
  return (
    <section className="px-8 py-16">


      {/* Section Header */}
         <div className="flex flex-col md:flex-row md:items-center gap-16 mb-20">
  <h2 className="bg-[#B9FF66] text-[#191A23] px-8 py-2 rounded-xl font-semibold text-5xl">
   Our Working Process
  </h2>
         <p className="text-[#191A23] max-w-[500px] mt-6 md:mt-0 opacity-70 text-2xl">
   Step-by-step approach to achieving your business goals.
  </p>
      </div>

<section className="w-[100%] mx-auto my-12">

  {/* First Box (Active) */}
  <div className="bg-[#B9FF66] rounded-[40px] border-2 border-black shadow-[0_8px_0_black] p-10 mb-8">

    <div className="hidden md:block w-[90%] h-[2px] bg-black mb-6"></div>

    <p className="hidden md:block text-lg mb-8">
      During the initial consultation, we will discuss your business goals
      and objectives, target audience, and current marketing efforts.
      This will allow us to understand your needs and tailor our services
      to best fit your requirements.
    </p>

    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h1 className="text-[60px] font-bold">01</h1>
        <h2 className="text-3xl font-semibold">Consultation</h2>
      </div>

      <div className="w-[60px] h-[60px] rounded-full bg-gray-300 border-2 border-black flex items-center justify-center text-3xl font-bold">
        −
      </div>
    </div>

  </div>


  {/* Second Box (Closed) */}
  <div className="bg-[#e5e5e5] rounded-[40px] border-2 border-black shadow-[0_8px_0_black] p-10">

    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h1 className="text-[60px] font-bold">02</h1>
        <h2 className="text-3xl font-semibold">
          Research and Strategy Development
        </h2>
      </div>

      <div className="w-[60px] h-[60px] rounded-full bg-gray-300 border-2 border-black flex items-center justify-center text-3xl font-bold">
        +
      </div>
    </div>

  </div>

</section>

    </section>
  )
}

export default Process




