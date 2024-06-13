import Program1Img from "../../assets/Images/Program1.png";
import Program2Img from "../../assets/Images/Program2.png";
import Program3Img from "../../assets/Images/Program3.png";
import Program4Img from "../../assets/Images/Program4.png";
export const Section2 = () => {
  return (
    <section className="mt-12">
      <h1 className="text-5xl sm:text-7xl font-bold text-center sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto leading-[60px] text-[#363636] mb-4">Programs for Every Goal</h1>
      <p className=" leading-8 text-center text-[#a79797]  sm:w-[80%] md:w-[60%] lg:w-[50%] text-base px-2 mx-auto">
        Get a workout program that works for your body. Use one of our preset
        programs or customize your own set of workouts to get the results you
        want. We have exercises for every body type and every body goal.
      </p>
      <div className="mt-4 grid-rows-2 grid mx-auto grid-flow-col gap-4 sm:gap-8 md:gap-16 lg:grid-cols-4 lg:grid-flow-row  lg:grid-rows-none px-4">
        <div className="relative">
            <img className="w-full " src={Program1Img} alt="" />
            <h2  className="absolute bottom-20 text-2xl text-white text-center left-0 right-0 font-bold">Weight Loss</h2>
        </div>
        <div className="relative">
            <img className="w-full " src={Program2Img} alt="" />
            <h2  className="absolute bottom-20 text-2xl text-white text-center left-0 right-0 font-bold">Strength Build</h2>
        </div>
        <div className="relative">
            <img className="w-full " src={Program3Img} alt="" />
            <h2  className="absolute bottom-20 text-2xl text-white text-center left-0 right-0 font-bold">Body Training</h2>
        </div>
        <div className="relative">
            <img className="w-full " src={Program4Img} alt="" />
            <h2  className="absolute bottom-20 text-2xl text-white text-center left-0 right-0 font-bold">Muscle Build</h2>
        </div>
      </div>
      <div className="w-full  flex justify-center items-center mt-12">
      <button class="text-white  bg-[#363636]  hover:text-black rounded-full px-6 py-3  font-bold text-lg   cursor-pointer">
            <span class="z-40 relative top-0 right-0 left-0 bottom-0">
              More Programs
            </span>
    </button>
      </div>
      
    </section>
  );
};
