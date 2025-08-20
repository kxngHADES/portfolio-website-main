import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Transcript from "@/components/transcript";
import { Boxes } from "@/components/ui/background-boxes";
import Work_xp from "@/components/workxp";
import Image from "next/image";

export const runtime = "edge"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero/>
        <Work_xp/>
        <Projects/>
        <Skills/>
        <Footer/>
        {/* <Transcript/>*/}
      </main>
    </div>
  );
}
