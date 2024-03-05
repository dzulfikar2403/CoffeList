import React from "react";
import shopImg from "../../assets/bg-cafe.jpg";
import vector from "../../assets/Vector.svg";
import MainHeader from "../element/MainHeader";
import { NavLink } from "react-router-dom";

const MenuLayouts = ({ children, title }) => {
  return (
    <div>
      <img src={shopImg} alt="bg-shop" className="h-48 w-full md:h-48" />
      <div className="font-DmSans flex justify-center py-4 -translate-y-32">
        <div className="relative overflow-clip w-3/4 h-full rounded-lg bg-[#1B1D1F]">
          <img src={vector} alt="zz" className="absolute w-3/4 py-2 translate-x-[57%] md:w-1/3 md:translate-x-[150%] lg:w-1/4 lg:translate-x-[200%]" />
          <div className="relative text-white pt-10 px-4 grid place-items-center w-full ">
            <MainHeader>
              <MainHeader.HeaderText>{title}</MainHeader.HeaderText>
              <MainHeader.nav>
                <NavLink to="/">All Products</NavLink>
                <NavLink to="/available">Available Now</NavLink>
              </MainHeader.nav>
            </MainHeader>

            {/* card */}
            <section className="py-2 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">{children}</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLayouts;
