import Image from 'next/image';
import React from 'react';

const Media = () => {
    return (
        <div>
            <h1 className="mt-12 mb-4 font-bold text-xl">Photos</h1>
          <div className="grid grid-cols-2 mb-2">
            <Image
              src="/image/Rectangle 2.png"
              alt="Rectangle1 here"
              width={215}
              height={200}
            />
            <Image
              src="/image/Rectangle 1.png"
              alt="Rectangle1 here"
              width={215}
              height={200}
            />
            <Image
              src="/image/Rectangle 4.png"
              alt="Rectangle1 here"
              width={215}
              height={200}
            />
            <Image
              src="/image/Rectangle 3.png"
              alt="Rectangle1 here"
              width={215}
              height={200}
            />
          </div>
          <p className="text-right text-[#196AA0] text-xl font-bold">More +</p>

          <h1 className="mt-12 mb-4 font-bold text-xl">Videos</h1>
          <div className="mb-2">
            <div className="mb-4">
              <Image
                src="/image/Video 1.png"
                alt="Rectangle1 here"
                width={430}
                height={240}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/image/Video 2.png"
                alt="Rectangle1 here"
                width={215}
                height={200}
              />
              <Image
                src="/image/Video 3.png"
                alt="Rectangle1 here"
                width={215}
                height={200}
              />
              <Image
                src="/image/Video 4.png"
                alt="Rectangle1 here"
                width={215}
                height={200}
              />
            </div>
          </div>
          <p className="text-right text-[#196AA0] text-xl font-bold">More +</p>
        </div>
    );
};

export default Media;