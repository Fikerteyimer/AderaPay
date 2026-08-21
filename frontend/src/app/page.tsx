import About from "./Component/Home/About";
import Hero from "./Component/Home/Hero";
import HowItWorks from "./Component/HowItWorks";
import WhyChoose from "./Component/WhyChoose";
import Navbar from "./Layouts/Navbar";
import Footer from './Layouts/Footer'
export default function Home() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <About/>
     <HowItWorks/>
     <WhyChoose/>
     <Footer/>
      
    </div>
  );
}
