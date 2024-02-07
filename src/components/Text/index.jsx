import React from "react";

const sizeClasses = {
  txtMulishRomanExtraBold64: "font-extrabold font-mulish",
  txtMulishRomanExtraBold32: "font-extrabold font-mulish",
  txtMulishRomanExtraBold40: "font-extrabold font-mulish",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
