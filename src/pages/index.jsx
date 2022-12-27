import * as React from "react"
import Header from "../components/header";
import LeftSide from "../components/leftSide";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section4 from "../components/section4";
import Section4Right from "../components/section4Right";

export default function Home() {
  return (
  <div className="flex">
  <div className="w-2/12">
  <LeftSide />
  </div>
  <div className="flex flex-col gap-y-5 w-full h-screen overflow-hidden">
  {/* <div className="sticky top-0 z-10"> */}
  <Header />
  {/* </div> */}
  
  <div className="px-5 flex flex-col gap-y-3 relative no-scrollbar overflow-scroll pb-4">
  <Section1 />
  <Section2 />
  <div className="mt-52 flex justify-between gap-x-8">
  <Section4 />
  <Section4Right />
  </div>
  </div>
  
  </div>
  </div>)
}
