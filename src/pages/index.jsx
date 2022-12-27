import * as React from "react"
import Header from "../components/header";
import LeftSide from "../components/leftSide";
import Section1 from "../components/section1";
import Section2 from "../components/section2";

export default function Home() {
  return (
  <div className="flex">
  <div className="w-2/12">
  <LeftSide />
  </div>
  <div className="flex flex-col gap-y-5 w-full ">
  <Header />
  <div className="px-5 flex flex-col gap-y-3">
  <Section1 />
  <Section2 />
  </div>
  
  </div>
  </div>)
}
