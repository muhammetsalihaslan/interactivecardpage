import Image from "next/image";
import React from "react";
import Card from "./card";
import Info from "./info";

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <Card />
      <Info />
    </div>
  );
};

export default Hero;
