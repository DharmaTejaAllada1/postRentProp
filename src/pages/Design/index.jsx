import React from "react";

import { Img } from "components";

const DesignPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[4096px] sm:h-auto object-cover w-full"
          src="images/img_image1.png"
          alt="imageOne"
        />
      </div>
    </>
  );
};

export default DesignPage;
