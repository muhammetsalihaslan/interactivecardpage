import Image from "next/image";
import React from "react";

const Card = ({
  valueFromFirst,
  valueFromSecond,
  valueMonth,
  valueYear,
  valueCvc,
}) => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/bg-main-desktop.png"
          alt="firstPage"
          width={0}
          height={0}
          className="w-2/3 h-screen hidden sm:block"
        />
        <Image
          src="/images/bg-main-mobile.png"
          alt="firstPage"
          width={0}
          height={0}
          className="w-screen h-2/5 block sm:hidden"
        />

        <div className="absolute flex sm:flex-col flex-col-reverse  gap-y-6 ms-[10rem]  sm:ms-[10px] -mt-[20rem] sm:-mt-[35rem] xl:ms-[15rem] p-3">
          <div className="bg-[url('/images/bg-card-front.png')] bg-cover w-[380px] h-[220px] sm:w-[350px] sm:h-[180px] lg:w-[400px] lg:h-[220px] rounded-md -mt-[7rem] sm:-mt-0 -ms-[8rem] sm:-ms-0">
            <Image
              src="/images/card-logo.svg"
              width={65}
              height={65}
              className="ms-[20px] mt-[30px] "
            />
            <div className="text-3xl sm:text-xl mt-[65px] sm:mt-[20px] lg:text-3xl text-white lg:mt-[65px] ms-[20px]">
              {valueFromFirst ? valueFromFirst : "0000 0000 0000 0000"}
            </div>
            <div className="flex text-white justify-between text-sm mt-[15px]">
              <h1 className="ms-[20px]">
                {valueFromSecond ? valueFromSecond : "Salih Aslan"}
              </h1>
              <span className="me-[20px]">
                {valueMonth ? valueMonth : "00"}/{valueYear ? valueYear : "00"}
              </span>
            </div>
          </div>
          <div className="bg-[url('/images/bg-card-back.png')] bg-cover w-[380px] h-[220px] sm:w-[350px] sm:h-[180px] lg:w-[400px] lg:h-[220px] rounded-md md:ms-[5rem] text-md  mt-[1rem]">
            <h1 className="mt-[6rem] ms-[20rem] sm:mt-[5rem] sm:ms-[17rem] lg:mt-[6rem] lg:ms-[20rem]">
              {valueCvc ? valueCvc : "000"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
