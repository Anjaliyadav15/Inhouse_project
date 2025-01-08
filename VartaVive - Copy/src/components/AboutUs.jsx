import React from 'react'

export const AboutUs = () => {
  return (
    <div className="relative mt-20 border border-black min-h-[500px] ">
      <h3 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-orange-500">
        About Us
      </h3>
    <div className="text-center">

      <h3 className="text-3xl sm:text-5xl lg:text-4xl mt-10 lg:mt-15 tracking-wide">
        Read News{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text pt-3">
          in your Preferred Language
        </span>
      </h3>
      
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 lg:px-8 py-6">
  <div className="flex-shrink-0 lg:w-1/2 flex justify-center lg:justify-start">
    <img 
      src="https://i.pinimg.com/564x/72/6d/54/726d54d191ffb6cd09bf26430f19c427.jpg" 
      alt="Descriptive Alt Text" 
      className="w-full h-auto max-h-40 lg:max-h-48 rounded-lg shadow-md"
    />
  </div>
  <div className="lg:w-1/2 flex items-center justify-center lg:justify-start lg:pl-6 mt-6 lg:mt-0">
    <span className="text-xl leading-relaxed text-center lg:text-left">
      Discover a new way to stay updated with our dynamic news platform. We bring you personalized news content in your preferred language and tailored to your selected state, ensuring you never miss an update that matters to you.
    </span>
  </div>
</div>


    </div>
    
  )
}
