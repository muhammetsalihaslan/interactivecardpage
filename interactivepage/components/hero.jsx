"use client";
import React, { useState } from "react";
import Card from "./card";
import Info from "./info";

const Hero = () => {
  const [valueFromFirst, setValueFromFirst] = useState("");
  const [valueFromSecond, setValueFromSecond] = useState("");
  const [valueMonth, setValueMonth] = useState("");
  const [valueYear, setValueYear] = useState("");
  return (
    <div className="grid grid-cols-2">
      <Card
        valueFromFirst={valueFromFirst}
        valueFromSecond={valueFromSecond}
        valueMonth={valueMonth}
        valueYear={valueYear}
      />
      <Info
        setValueFromFirst={setValueFromFirst}
        setValueFromSecond={setValueFromSecond}
        setValueMonth={setValueMonth}
        setValueYear={setValueYear}
      />
    </div>
  );
};

export default Hero;
