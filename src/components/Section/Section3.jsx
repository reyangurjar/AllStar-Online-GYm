import womanWithCable from "../../assets/Images/woman-with-cable.png";

const Section3 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row   py-4 max-w-[1440px] items-center justify-center mx-auto mt-12 md:px-12">
      <div className="hero-content w-full flex text-left md:w-1/2  flex-col  py-4 ">
        <h1 className=" md:text-7xl text-5xl   font-medium leading-[55px] pr-4 md:pr-0 text-[#363636] z-10 mb-4">
        Break Out of Old Habits
        </h1>
        <p className="md:text-xl text-lg font-normal text-[#a79797] z-10 pr-4">
        It’s never too late to start focusing on your health. It’s just a matter of getting started. With our no-obligation, contract-free memberships, it’s easy to get your healthy habits going without the pressure. Feel the best you ever have. It all starts here.        </p>
        <div className="z-30  ">
          <button class="text-white overflow-hidden bg-[#363636] group hover:text-black rounded-full px-6 py-3 w-fit font-bold text-lg mt-12 z-10 cursor-pointer relative">
            <span class="z-40 relative top-0 right-0 left-0 bottom-0">
              JOIN NOW
            </span>
          </button>
        </div>
      </div>

      <div className=" bg-[url('/roundedRectangle.svg')]  bg-no-repeat bg-contain  bg-center items-center justify-center  ">
        <img src={womanWithCable} className="" alt="womanWithCable" />
      </div>
    </div>
  );
};

export default Section3;
