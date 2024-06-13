import WomanWithDumbbellImage from "../../assets/Images/woman-with-dumbbell.png";

const SignUp = () => {
  return (
    <div className="pt-12 rounded-[50px] w-full flex flex-col md:flex-row   py-4 max-w-[1440px] items-center justify-center mx-auto  md:px-12 bg-gradient-to-r from-[#eea849] to-[#f46b45] relative mt-96 md:mt-12" >
      <div className="md:w-1/2">
        <img src={WomanWithDumbbellImage} className="w-[200px] sm:w-[300px] sm:absolute sm:bottom-[60%] sm:-translate-x-1/2 md:translate-x-0 md:-bottom-12  md:w-[370px]" alt="" />
      </div>
      <div className="px-6 mt-4 sm:pt-[400px] md:py-6 md:w-1/2 md:text-left md:px-0 ">
        <h1 className="text-4xl text-center font-medium leading-[50px]">Jumpstart Your Health</h1>
        <form className="space-y-4 mt-6">
          <select
            id="optionId"
            name="optionId"
            data-name="optionId"
            className="w-full p-3 rounded-lg bg-[#f7a061] placeholder:text-white focus:outline-none text-white"
            
          >
            <option value="">Select one...</option>
            <option value="First">First choice</option>
          </select>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg bg-[#f7a061] placeholder:text-white focus:outline-none text-white"
            placeholder="Email Address"
          />
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-3 rounded-lg bg-[#f7a061] placeholder:text-white focus:outline-none text-white "
            placeholder="Choose a Username"
          />
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-3 rounded-lg bg-[#f7a061] placeholder:text-white focus:outline-none text-white"
            placeholder="Choose a Password"
          />
          <button type="submit" className="w-full rounded-lg bg-black text-white hover:bg-gray-800 py-3 ">Join Now</button>
        </form>
        <div className="mt-6 text-[14px] text-white flex gap-1">
          <p>
          Already have an acccount?
          </p>
          <a href="login" className="text-black font-bold">  Login</a>
        </div>
        <div className="my-6 text-[12px]">
          <p>
            Trial and monthly membership plans automatically renew monthly for
            $45.95 per month until canceled. Free cancellation anytime. By
            joining, you agree to the Terms & Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
