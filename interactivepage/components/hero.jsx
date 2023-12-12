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
          className="w-1/3 h-screen "
        />
        <div className="absolute flex flex-col  gap-y-6 -mt-[35rem] ms-[15rem]">
          <Image
            src="/images/bg-card-back.png"
            width={400}
            height={300}
            className="ms-[5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
