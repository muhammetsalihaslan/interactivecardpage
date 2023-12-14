import Image from "next/image";
import React from "react";

const Card = ({ valueFromFirst }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/bg-main-desktop.png"
          alt="firstPage"
          width={0}
          height={0}
          className="w-2/3 h-screen"
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
              {valueFromFirst ? valueFromFirst : "0000 0000 0000 0000"}
            </div>
            <div className="flex text-white justify-between text-sm mt-[15px]">
              <h1 className="ms-[20px]">Salih ASLAN</h1>
              <span className="me-[20px]">00/00</span>
            </div>
          </div>
          <div className="bg-[url('/images/bg-card-back.png')] bg-cover w-[400px] h-[220px] rounded-md ms-[5rem] text-md">
            <h1 className="mt-[6rem] ms-[20rem]">000</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
