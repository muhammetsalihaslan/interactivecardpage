"use client";
import React, { useState } from "react";

const Info = ({ setValueFromFirst }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    cardHolder: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [cardHolder, setCardHolder] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    const sanitizedValue = value.slice(0, 19);

    const formattedValue = sanitizedValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    if (/[a-zA-Z]/.test(value)) {
      setErrorMessage((prevError) => ({
        ...prevError,
        cardNumber: "numbers only",
      }));
    } else if (/\s/.test(value)) {
      setErrorMessage("");
    } else {
      setErrorMessage("");
    }

    setCardNumber(formattedValue);
    setValueFromFirst(formattedValue);
  };

  const handleExpMonth = (e) => {
    const value = e.target.value;

    const expDateData = value.slice(0, 2);

    if (/[a-zA-Z]/.test(value)) {
      setErrorMessage("date");
    } else if (/\s/.test(value)) {
      setErrorMessage("cant be blank");
    } else {
      setErrorMessage("");
    }

    setExpMonth(expDateData);
  };

  const handleExpYear = (e) => {
    const value = e.target.value;

    const expDateData = value.slice(0, 2);

    if (/[a-zA-Z]/.test(value)) {
      setErrorMessage("date");
    } else if (/\s/.test(value)) {
      setErrorMessage("cant be blank");
    } else {
      setErrorMessage("");
    }

    setExpYear(expDateData);
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      setErrorMessage("Can't be blank");
    }
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
                  errorMessage ? "border-red-500" : "border-gray-300"
                }`}
                value={cardHolder}
                onBlur={handleBlur}
              />
              {errorMessage.cardHolder && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
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
                onBlur={handleBlur}
              />
              {errorMessage.cardNumber && (
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
                  name="expMonth"
                  className={`w-2/12 h-[35px] p-2 mt-1 outline-none border rounded-md ${
                    errorMessage ? "border-red-500" : "border-gray-300"
                  }`}
                  value={expMonth}
                  onChange={handleExpMonth}
                  onBlur={handleBlur}
                />
                {errorMessage.expMonth && (
                  <p className="text-red-500 mt-2">{errorMessage}</p>
                )}

                <input
                  type="text"
                  id="ydate"
                  name="expYear"
                  className={`w-2/12 h-[35px] p-2 mt-1 outline-none border rounded-md ms-2 ${
                    errorMessage ? "border-red-500" : "border-gray-300"
                  }`}
                  value={expYear}
                  onChange={handleExpYear}
                  onBlur={handleBlur}
                />
                {errorMessage.expYear && (
                  <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
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
                onBlur={handleBlur}
              />
              {errorMessage.cvc && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
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
