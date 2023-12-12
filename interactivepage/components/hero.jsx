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
          <div className="bg-[url('/images/bg-card-front.png')] bg-cover w-[400px] h-[220px] rounded-md"></div>
          <div className="bg-[url('/images/bg-card-back.png')] bg-cover w-[400px] h-[220px] rounded-md ms-[5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
