import React from "react";

import { Text } from "components";

const BuyHerePage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-mulish items-center justify-start mx-auto p-[296px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start mb-[17px]">
          <Text
            className="md:ml-[0] ml-[163px] md:text-5xl text-[64px] text-white-A700"
            size="txtMulishRomanExtraBold64"
          >
            3$ Only
          </Text>
          <Text
            className="md:ml-[0] ml-[78px] mt-[17px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
            size="txtMulishRomanExtraBold40"
          >
            Buy the design here
          </Text>
          <a
            href="https://mtoshakir.gumroad.com/l/dream-house"
            className="font-extrabold mt-10 text-2xl md:text-[22px] text-white-A700 sm:text-xl underline"
            target="_blank"
            rel="noreferrer"
          >
            <Text>https://mtoshakir.gumroad.com/l/dream-house</Text>
          </a>
        </div>
      </div>
    </>
  );
};

export default BuyHerePage;
