import React from "react";
import Rate from "../element/Rate";
import LabelCoffe from "../element/LabelCoffe";
import ImageBox from "../element/ImageBox";

const CardCoffe = ({ data }) => {
  return (
    <div className="text-white mb-2 rounded-md h-60 overflow-hidden ">
      <ImageBox data={data}/>
      <LabelCoffe>
        <LabelCoffe.product>{data.name}</LabelCoffe.product>
        <LabelCoffe.price>{data.price}</LabelCoffe.price>
      </LabelCoffe>
      <Rate data={data} />
    </div>
  );
};

export default CardCoffe;
