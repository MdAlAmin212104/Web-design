import React from "react";

const TextContent = () => {
  return (
    <div className="lg:w-[600px] ml-12 my-6">
      <h1 className="text-xl lg:text-3xl font-semibold text-[#2B2B2B]">How Astrophotography changed my life</h1>
      <p className="h-[230px] overflow-auto mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
        quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
        vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
        vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
        porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non
        ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.
        Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem
        condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
        ac posuere leo.</p>
        <div className="lg:flex space-x-2">
            <p className="text-[#76A4CE] bg-white mt-4 rounded-xl lg:px-2">#photography</p>
            <p className="text-[#76A4CE] bg-white mt-4 rounded-xl lg:px-2">#astronomy</p>
            <p className="text-[#76A4CE] bg-white mt-4 rounded-xl lg:px-2">#astrophotography</p>
            <p className="text-[#76A4CE] bg-white mt-4 rounded-xl lg:px-2">+</p>
            <p className="text-[#196AA0] flex justify-end mt-4 rounded-xl lg:px-2">Read more</p>
        </div>
    </div>
  );
};

export default TextContent;
