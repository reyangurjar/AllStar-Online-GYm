import React from "react";
import heroImage from "../../assets/Images/Hero/hero-img.png";
const Hero = () => {
  return (
    <>
      <section className=" pt-20 md:pt-40 relative ">
        <div className="hero-content w-full flex flex-col md:w-1/2 py-4 ">
          <h1 className="md:text-7xl  text-5xl  font-bold text-left text-[#363636] z-10">
            Small Steps Equal Big Changes
          </h1>
          <div className="z-30  ">

<button class="text-white overflow-hidden bg-[#363636] group hover:text-black rounded-full px-6 py-3 w-fit font-bold text-lg mt-12 z-10 cursor-pointer relative">
  <span class="z-40 relative top-0 right-0 left-0 bottom-0">
    FITNESS NOW
  </span>

</button> 

          </div>
        </div>
        <div >
          <img
            src={heroImage}
            alt="heroImg"
            className="relative object-cover left-12 bottom-20 origin-right scale-[1.6] sm:scale-[1] md:bottom-96 "
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
