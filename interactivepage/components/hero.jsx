"use client";
import React, { useState } from "react";
import Card from "./card";
import Info from "./info";

const Hero = () => {
  const [valueFromFirst, setValueFromFirst] = useState("");
  return (
    <div className="grid grid-cols-2">
      <Card valueFromFirst={valueFromFirst} />
      <Info setValueFromFirst={setValueFromFirst} />
    </div>
  );
};

export default Hero;
