import Image from "next/image";
import React from "react";
import {
  FaLock,
  FaMoneyBill,
  FaRegLightbulb,
  FaTree,
  FaWifi,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { TbSettingsStar } from "react-icons/tb";
import { Photo } from "./ui/photo";
export function Offers() {
  return (
    <section className=" my-20 lg:px-[200px] mt-[500px] lg:mt-20 px-[2%]">
      <h2 className="text-2xl font-playfair text-center">
        What Pineapple Land Offers
      </h2>
      <div className="lg:flex items-center hidden">
      <Photo content={<Image
          src={"/img/Rectangle 7.png"}
          width={200}
          height={0}
          alt="Photo"
          className="w-[270px] h-[280px]"
        />} rtl={true} height={180}/>
        
        <div className=" bg-[#0E204E] w-[100px] h-[180px] block"  />
        <div className=" ml-[20%] flex justify-evenly w-full">
          <div className=" flex flex-col justify-center items-center">
            <FaTree size={50} />
            <span>Eco Friendly</span>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <FaWifi size={50} />
            <span>Smart Homes</span>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <FaMoneyBill size={50} />
            <span>Good Rates</span>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center hidden">
      <div className=" ml-[20%] flex justify-evenly w-full">
          <div className=" flex flex-col justify-center items-center">
            <FaRegLightbulb size={50} />
            <span>24/7 Electricitry</span>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <FaLock size={50} />
            <span>Private Security</span>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <TbSettingsStar size={50} />
            <span>Serviced Apartment</span>
          </div>
        </div>
        <div className=" bg-[#0E204E] w-[100px] h-[180px] block" />
        
        <Photo content={<Image
          src={"/img/Rectangle 20.png"}
          width={200}
          height={0}
          alt="Photo"
          className="w-[270px] h-[280px]"
        />} rtl={true} height={180}/>
        
      </div>
      <div className="lg:hidden block relative">
        <Image
          src={"/img/Rectangle 7.png"}
          width={200}
          height={0}
          alt="Photo"
          className="w-full"
        />
        <div className="bg-[#0E204E] text-white w-[90%] absolute bottom-[-10%] p-10 left-0 mx-[5%]">
          <div className=" grid w-full grid-cols-3 gap-2 text-center svg-white">
            <div className=" flex flex-col justify-center items-center">
              <FaTree size={50} />
              <span className="text-white">Eco Friendly</span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <FaWifi size={50} />
              <span className="text-white">Smart Homes</span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <FaMoneyBill size={50} />
              <span className="text-white">Good Rates</span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <FaRegLightbulb size={50} />
              <span className="text-white">
                24/7 <br /> Electricitry
              </span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <FaLock size={50} />
              <span className="text-white">
                Private <br /> Security
              </span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <TbSettingsStar size={50} />
              <span className="text-white ">Serviced Apartment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
