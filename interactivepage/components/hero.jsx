"use client";
import React, { useState } from "react";
import Card from "./card";
import Info from "./info";

const Hero = () => {
  const [valueFromFirst, setValueFromFirst] = useState("");
  const [valueFromSecond, setValueFromSecond] = useState("");
  const [valueMonth, setValueMonth] = useState("");
  const [valueYear, setValueYear] = useState("");
  const [valueCvc, setValueCvc] = useState("");
  return (
    <div className="sm:grid sm:grid-cols-2 ">
      <Card
        valueFromFirst={valueFromFirst}
        valueFromSecond={valueFromSecond}
        valueMonth={valueMonth}
        valueYear={valueYear}
        valueCvc={valueCvc}
      />
      <Info
        setValueFromFirst={setValueFromFirst}
        setValueFromSecond={setValueFromSecond}
        setValueMonth={setValueMonth}
        setValueYear={setValueYear}
        setValueCvc={setValueCvc}
      />
    </div>
  );
};

export default Hero;
