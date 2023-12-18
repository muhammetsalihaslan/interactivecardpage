"use client";
import React, { useState } from "react";

const Info = ({ setValueFromFirst, setValueFromSecond }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [cardHolder, setCardHolder] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardHolder = (e) => {
    const value = e.target.value;
    setCardHolder(value);
    setValueFromSecond(value);
  };

  const handleBlur = () => {
    const value1 = cardHolder.trim();
    if (!value1) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        cardHolder: "Can't be blank",
      }));
    } else {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        cardHolder: "",
      }));
    }
  };

  const handleCardNumber = (e) => {
    const value = e.target.value;

    const sanitizedValue = value.slice(0, 19);

    const formattedValue = sanitizedValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    if (/[a-zA-Z]/.test(value)) {
      setErrorMessage((prevError) => ({
        ...prevError,
        cardNumber: "numbers only",
      }));
    } else if (/\s/.test(value)) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        cardNumber: "",
      }));
    } else {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        cardNumber: "",
      }));
    }

    setCardNumber(formattedValue);
    setValueFromFirst(formattedValue);
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
                id="cardHolder"
                name="cardHolder"
                className={`w-1/2 h-[35px] rounded-md p-2 border mt-1 outline-none ${
                  errorMessage.cardHolder ? "border-red-500" : "border-gray-300"
                }`}
                value={cardHolder}
                onChange={handleCardHolder}
                onBlur={handleBlur}
              />
              {errorMessage.cardHolder && (
                <p style={{ color: "red" }}>{errorMessage.cardHolder}</p>
              )}
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className={`w-1/2 h-[35px] rounded-md p-2 border mt-1 outline-none ${
                  errorMessage.cardNumber ? "border-red-500" : "border-gray-300"
                }`}
                value={cardNumber}
                onChange={handleCardNumber}
              />
              {errorMessage.cardNumber && (
                <p style={{ color: "red" }}>{errorMessage.cardNumber}</p>
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
                  name="expMonth"
                  className={`w-2/12 h-[35px] p-2 mt-1 outline-none border rounded-md ${
                    errorMessage.expMonth ? "border-red-500" : "border-gray-300"
                  }`}
                  value={expMonth}
                />

                <input
                  type="text"
                  id="ydate"
                  name="expYear"
                  className={`w-2/12 h-[35px] p-2 mt-1 outline-none border rounded-md ms-2 ${
                    errorMessage.expYear ? "border-red-500" : "border-gray-300"
                  }`}
                  value={expYear}
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
                value={cvc}
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
