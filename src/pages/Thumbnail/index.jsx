import React from "react";

import { Img, Text } from "components";

const ThumbnailPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-mulish gap-[47px] items-center mx-auto md:pl-10 sm:pl-5 pl-[127px] w-full">
        <div className="flex flex-col items-center justify-start">
          <Text
            className="leading-[35.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-full"
            size="txtMulishRomanExtraBold32"
          >
            Minimum Design System
          </Text>
          <Text
            className="mt-[49px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
            size="txtMulishRomanExtraBold32"
          >
            400+ Icons
          </Text>
          <Text
            className="leading-[35.00px] mt-[47px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-full"
            size="txtMulishRomanExtraBold32"
          >
            Perfectly Layered
          </Text>
          <Text
            className="leading-[35.00px] mt-[51px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-full"
            size="txtMulishRomanExtraBold32"
          >
            Image not included
          </Text>
        </div>
        <div className="h-[1084px] relative w-[79%] md:w-full">
          <Img
            className="absolute h-[1084px] inset-y-[0] my-auto object-cover right-[0] w-[48%]"
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <Img
            className="absolute h-[970px] inset-[0] justify-center m-auto object-cover w-[99%]"
            src="images/img_image1_970x1012.png"
            alt="imageOne"
          />
        </div>
      </div>
    </>
  );
};

export default ThumbnailPage;
