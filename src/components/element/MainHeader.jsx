import React from "react";

const MainHeader = ({ children }) => {
  return <>{children}</>;
};

export const HeaderText = ({children}) => {
  return (
    <>
      <h1 className="text-[32px] font-semibold py-2">{children}</h1>
      <p className="text-[14px] text-center text-[#6F757C] max-w-[220px] md:max-w-md ">
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
    </>
  );
};

export const Navbar = ({children}) => {
  return (
    <nav className="text-[14px] flex gap-3 py-6 justify-center items-center font-medium">
      {children}
    </nav>
  );
};

MainHeader.HeaderText = HeaderText;
MainHeader.nav = Navbar;

export default MainHeader;
