import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Image
        src="/image/banner.png"
        alt="Description of the image"
        layout="responsive"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default Banner;
