import Image from "next/image";
import React from "react";

const Finalpart = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 -ms-[4rem]">
      <Image src="./images/icon-complete.svg" width={65} height={65} />
      <h1 className="text-4xl font-bold">THANK YOU</h1>
      <p className="text-gray-500">We've added your card details</p>
      <button
        type="submit"
        className=" w-4/5 sm:w-1/2  text-center p-2 mt-5 outline-none border rounded-md bg-[#1F072F] text-white"
      >
        Confirm
      </button>
    </div>
  );
};

export default Finalpart;
