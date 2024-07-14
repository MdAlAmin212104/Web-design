import React from "react";
import ProfileInfo from "./profileInfo";
import TextContent from "./TextContent";
import Media from "./Media";

const Content = () => {
  return (
    <div>
      <div className="lg:flex container mx-auto bg-[#D9D9D9] z-0 max-w-[1200px]">
        <div className="lg:w-2/3">
          <ProfileInfo />
          <TextContent />
          <TextContent />
        </div>
        <div className="lg:w-1/3 mr-6">
          <Media/>
        </div>
      </div>
    </div>
  );
};

export default Content;
