import React from "react";
import starFill from "../../assets/Star_fill.svg";
import Star from "../../assets/Star.svg";

const Rate = ({ data }) => {
  return (
    <div className="flex justify-between text-[12px] font-semibold">
      <div className="flex justify-center items-center gap-1">
        {data.rating !== null ? (
          <>
            <img src={starFill} alt="starfill" className="w-6" />
            <p>
              {data.rating} ({data.votes} votes)
            </p>
          </>
        ) : (
          <>
            <img src={Star} alt="Star" className="w-6" />
            <p>No ratings</p>
          </>
        )}
      </div>
      <div>
        <span className="text-[#ED735D] px-2">{!data.available && "Sold out"}</span>
      </div>
    </div>
  );
};

export default Rate;
