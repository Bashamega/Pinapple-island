import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Photo } from "./ui/photo";
export default function Join() {
  return (
    <section
      className=" my-20 lg:p-[200px] text-center lg:text-left mt-10 px-[2%] py-[50px] flex justify-evenly items-center lg:bg-transparent bg-[#0E204E]"
    >
      <div  className="lg:w-1/2 lg:block flex items-center flex-col">
        <h2 className=" font-playfair text-4xl text-white lg:text-[#0E204E] lg:hidden block">
          Become an Agent
        </h2>
        <h2 className=" font-playfair text-4xl text-white lg:text-[#0E204E] hidden lg:block">
          Become an <br /> Agent
        </h2>
        <p className="my-5 font-manrope text-white lg:text-[#0E204E]">
          a community that gives you a taste of happiness, a place you’ll love
          to live and an opportunity to build a home.
        </p>
        <Button variant={"ocean"}>
          Get in Touch
        </Button>
      </div>
      <div className="lg:flex items-center hidden">
        <Photo height={200} rtl={false} content={<Image
            src={"/img/agent.png"}
            width={400}
            height={0}
            alt="Agent"
            className="w-3/4"
          /> }/>
        
      </div>
    </section>
  );
}
