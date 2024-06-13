import Logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className='flex justify-between mt-4 '> 
      <img src={Logo} className="w-32 sm:w-auto " alt="" />
      <div className="flex gap-4 justify-center items-center">
        <button className="font-extrabold ">LOGIN</button>
        <a className="rounded-full bg-black text-white  px-6 py-2 text-sm font-bold hover:bg-[#F46B45] transition ease-out duration-500 cursor-pointer">SIGN UP</a>
      </div>
    </nav>
  )
}

export default Navbar