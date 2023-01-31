import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigator = useNavigate();
  return (
    <div>
      <div onClick={() => navigator("/")} className="Header">
        <div>FIFA WORLD CUP</div>
        <div className="header_qatar">Qat_ar 2022</div>
      </div>
    </div>
  );
};

export default Header;
