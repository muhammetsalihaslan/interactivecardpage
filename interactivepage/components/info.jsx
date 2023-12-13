"use client";
import React, { useState } from "react";

const Info = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (isNaN(value)) {
      setErrorMessage("Wrong format numbers only");
    } else {
      setErrorMessage("");
    }

    setCardNumber(value);
  };
  return (
    <div>
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
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className={`w-1/2 h-[35px] rounded-md p-2 border mt-1 outline-none ${
                  errorMessage ? "border-red-500" : "border-gray-300"
                }`}
                value={cardNumber}
                onChange={handleInputChange}
              />
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
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

export default Info;
