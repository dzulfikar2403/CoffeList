import React from "react";

const LabelCoffe = ({ children }) => {
  return <div className="flex justify-between px-1 py-2">{children}</div>;
};

export const product = ({ children }) => {
  return <label className="text-[14px] font-semibold">{children}</label>;
};

export const price = ({ children }) => {
  return <p className="text-[12px] font-medium rounded flex justify-center items-center px-2  bg-[#BEE3CC] text-black">{children}</p>;
};

LabelCoffe.product = product;
LabelCoffe.price = price;

export default LabelCoffe;
