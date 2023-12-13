import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
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
              0000 0000 0000 0000
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
      <div className="ms-[3rem] mt-[10rem]">
        <form action="submit" className="">
          <div className="text-sm">
            <div className="flex flex-col">
              <label htmlFor="cardholder">CARDHOLDER NAME</label>
              <input
                type="text"
                id="cardholder"
                name="cardholder"
                className="w-1/2 h-[35px] rounded-md p-2 border mt-1 outline-none"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="cardnumber">CARD NUMBER</label>
              <input
                type="text"
                id="cardnumber"
                name="cardnumber"
                className="w-1/2 h-[35px] rounded-md p-2 border mt-1 outline-none"
              />
            </div>
          </div>
          <div className="  text-sm mt-5 flex ">
            <div>
              <label htmlFor="date">EXP. DATE (MM-YY)</label>
              <div>
                <input
                  type="text"
                  id="date"
                  name="mm"
                  className="w-2/12 h-[35px] p-2 mt-1 outline-none border rounded-md"
                />
                <input
                  type="text"
                  id="date"
                  name="yy"
                  className="w-2/12 h-[35px] p-2 mt-1 outline-none border rounded-md ms-2"
                />
              </div>
            </div>
            <div className=" flex flex-col -ms-[230px]   ">
              <label htmlFor="cvc" className="ms-2">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                className="w-1/1 h-[35px] p-2 mt-1 outline-none border rounded-md ms-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" w-1/2 text-center p-2 mt-5 outline-none border rounded-md bg-[#1F072F] text-white"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
