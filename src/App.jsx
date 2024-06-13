
import Navbar from "./components/Navbar"
import heroBgImage from "./assets/Images/Hero/hero-bg-image.png"
import Hero from "./components/Section/Hero"
import Section1 from "./components/Section/Section1"
import { Section2 } from "./components/Section/Section2"
import Section3 from "./components/Section/Section3"
import SignUp from "./components/Section/SignUp"
import Footer from "./components/Section/Footer"

function App() {


  return (
  
  <>
  <div className=" mx-auto  px-6 md:px-12 max-w-[1440px]">
  <img className="absolute top-0 right-0 w-[600px] lg:w-auto bottom-auto -z-10" src={heroBgImage} alt="" />
  <Navbar/>
  <Hero/>
  <Section1/>
  <Section2/>
  <Section3/>
  <SignUp/>
  <Footer/>
  
  </div>
  <div className="border-t border-[#909090] ">
        <div className=" text-[#909090] font-light  text-sm flex flex-col sm:flex-row sm:justify-between px-6 md:px-12 py-2">
          <p> Copyright</p>
          <div class>
            <a href="#" class="lg-link">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" class="lg-link">
              Terms &amp; Conditions
            </a>{" "}
            |{" "}
            <a href="#" class="lg-link">
              Support
            </a>
          </div>
        </div>
      </div>
  </>
  )
}

export default App

