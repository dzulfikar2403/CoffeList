import React from "react";

const ImageBox = ({ data }) => {
  return (
    <div className="relative">
      {data.popular ? <h4 className="absolute top-2 left-2 text-black text-[10px] px-3 py-1 bg-[#F6C768] rounded-full font-semibold">Popular</h4> : <></>}
      <img src={`${data.image}`} alt="shopimg" className="w-full object-cover object-center h-2/3 rounded-lg" />
    </div>
  );
};

export default ImageBox;
