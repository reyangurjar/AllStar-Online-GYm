import manWithRope from "../../assets/Images/TakeStepSection/man-with-rope.png";

const Section1 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row   py-4 max-w-[1440px] items-center justify-center mx-auto mt-12 md:px-12">
      <div className=" bg-[url('/roundedRectangle.svg')]  bg-no-repeat bg-contain  bg-center items-center justify-center  ">
        <img src={manWithRope} className="" alt="ManWithRope" />
      </div>

      <div className="hero-content w-full flex text-left md:w-1/2  flex-col  py-4 ">
        <h1 className=" md:text-7xl text-5xl   font-medium leading-[55px] pr-4 md:pr-0 text-[#363636] z-10 mb-4">
        Take A Step Toward Fitness
        </h1>
        <p className="md:text-xl text-lg font-normal text-[#a79797] z-10 pr-4">
        Getting into shape doesn't have to be intimidating. Start putting your best fitness foot forward with an online training program that makes you the all star. Get guided workouts for your level of fitness, that you can do anywhere, and at your own pace.
        </p>
        <div className="z-30  ">
          <button class="text-white overflow-hidden bg-[#363636] group hover:text-black rounded-full px-6 py-3 w-fit font-bold text-lg mt-12 z-10 cursor-pointer relative">
            <span class="z-40 relative top-0 right-0 left-0 bottom-0">
              JOIN NOW
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
