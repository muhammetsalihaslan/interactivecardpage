"use client";
import React, { useState } from "react";
import Card from "./card";
import Info from "./info";

const Hero = () => {
  const [valueFromFirst, setValueFromFirst] = useState("");
  const [valueFromSecond, setValueFromSecond] = useState("");
  return (
    <div className="grid grid-cols-2">
      <Card valueFromFirst={valueFromFirst} valueFromSecond={valueFromSecond} />
      <Info
        setValueFromFirst={setValueFromFirst}
        setValueFromSecond={setValueFromSecond}
      />
    </div>
  );
};

export default Hero;
