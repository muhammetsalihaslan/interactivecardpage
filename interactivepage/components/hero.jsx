import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/images/bg-main-desktop.png"
          alt="firstPage"
          width={0}
          height={0}
          className="w-1/3 h-screen"
        />
        <div className="absolute flex flex-col  gap-y-6 -mt-[35rem] ms-[15rem]">
          <div className="bg-[url('/images/bg-card-front.png')] bg-cover w-[400px] h-[220px] rounded-md">
            <Image
              src="/images/card-logo.svg"
              width={65}
              height={65}
              className="ms-[20px] mt-[30px]"
            />
            <div className="text-3xl text-white mt-[65px] ms-[20px]">
              9765 3214 2536 9871
            </div>
            <div className="flex text-white justify-between text-sm mt-[15px]">
              <h1 className="ms-[20px]">Salih ASLAN</h1>
              <span className="me-[20px]">09/10</span>
            </div>
          </div>
          <div className="bg-[url('/images/bg-card-back.png')] bg-cover w-[400px] h-[220px] rounded-md ms-[5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
