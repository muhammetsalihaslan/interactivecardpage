"use client";
import React, { useState } from "react";
import Finalpart from "./finalpart";

const Info = ({
  setValueFromFirst,
  setValueFromSecond,
  setValueMonth,
  setValueYear,
  setValueCvc,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [cardHolder, setCardHolder] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [confirm, setConfirm] = useState(false);

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

  const handleExpMonth = (e) => {
    const monthValue = e.target.value;
    const isNumeric = /^[1-9]\d{0,1}$/.test(monthValue);

    if (isNumeric || monthValue === "") {
      const numericInput = parseInt(monthValue, 10);

      if (numericInput > 12) {
        setErrorMessage((prevError) => ({
          ...prevError,
          expMonth: "month",
        }));
      } else {
        setErrorMessage((prevError) => ({
          ...prevError,
          expMonth: "",
        }));
        setExpMonth(monthValue);
      }
    }

    setValueMonth(monthValue);
  };

  const handleExpYear = (e) => {
    const yearValue = e.target.value;
    const isYearNumeric = /^[1-9]\d{0,1}$/.test(yearValue);

    if (isYearNumeric || yearValue === "") {
      const numericInput = parseInt(yearValue, 10);

      if (numericInput > 50) {
        setErrorMessage((prevError) => ({
          ...prevError,
          expYear: "to long",
        }));
      } else {
        setErrorMessage((prevError) => ({
          ...prevError,
          expYear: "",
        }));
        setExpYear(yearValue);
      }
    }

    setValueYear(yearValue);
  };

  const handleYearBlur = () => {
    const value = expYear.trim();

    if (!value && expMonth) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        expYear: "Can't be blank",
      }));
    } else {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        expYear: "",
      }));
    }
  };

  const handleCvc = (e) => {
    const value = e.target.value;
    const isValidInput = /^(0|[1-9]\d{0,2})$/.test(value);
    if (isValidInput || value === "") {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        cvc: "",
      }));
      setCvc(value);
    }

    setValueCvc(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <div>
      <div className="ms-[3rem] mt-[10rem]">
        {!confirm && (
          <form action="submit" className="" onSubmit={handleSubmit}>
            <div className="text-sm ">
              <div className="flex flex-col">
                <label htmlFor="cardholder">CARDHOLDER NAME</label>
                <input
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  className={`w-4/5 sm:w-1/2 h-[35px] rounded-md p-2 border mt-1 outline-none ${
                    errorMessage.cardHolder
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  value={cardHolder}
                  onChange={handleCardHolder}
                  onBlur={handleBlur}
                  required
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
                  className={`w-4/5 sm:w-1/2  h-[35px] rounded-md p-2 border mt-1 outline-none ${
                    errorMessage.cardNumber
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  value={cardNumber}
                  onChange={handleCardNumber}
                  required
                />
                {errorMessage.cardNumber && (
                  <p style={{ color: "red" }}>{errorMessage.cardNumber}</p>
                )}
              </div>
            </div>
            <div className=" w-1/2  text-sm mt-5 lg:grid lg:grid-cols-2 flex flex-col ">
              <div className="w-1/1 flex flex-col">
                <label htmlFor="date">EXP.DATE (MM-YY)</label>
                <div className="flex">
                  <div>
                    <input
                      type="text"
                      id="date"
                      name="expMonth"
                      className={`w-4/5 h-[35px] p-2 mt-1 outline-none border rounded-md ${
                        errorMessage.expMonth
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      value={expMonth}
                      onChange={handleExpMonth}
                      maxLength={2}
                      required
                    />
                    {errorMessage.expMonth && (
                      <p style={{ color: "red" }}>{errorMessage.expMonth}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      id="ydate"
                      name="expYear"
                      className={`w-4/5 h-[35px] p-2 mt-1 outline-none border rounded-md -ms-2  ${
                        errorMessage.expYear
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      value={expYear}
                      onChange={handleExpYear}
                      onBlur={handleYearBlur}
                      maxLength={2}
                      required
                    />
                    {errorMessage.expYear && (
                      <p style={{ color: "red" }}>{errorMessage.expYear}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <label htmlFor="cvc" className="">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  className="w-1/1 h-[35px] p-2 mt-1 outline-none border rounded-md lg:-ms-2  "
                  value={cvc}
                  onChange={handleCvc}
                  maxLength={3}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className=" w-4/5 sm:w-1/2  text-center p-2 mt-5 outline-none border rounded-md bg-[#1F072F] text-white"
            >
              Confirm
            </button>
          </form>
        )}

        {confirm && <Finalpart />}
      </div>
    </div>
  );
};

export default Info;
