// import Image from "next/image";

// import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import Services from "./services/page";
import AboutDoctor from "./about/page";
// import Navbar from "@/components/Navbar";
// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    {/* <Navbar></Navbar> */}
   {/* <Header></Header> */}
   <Herosection></Herosection>
   <Services></Services>
   <AboutDoctor></AboutDoctor>
    </>
  );
}
