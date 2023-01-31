import React from "react";

const MyButton = ({ onClick, text, type }) => {
  return (
    <button onClick={onClick} className={type}>
      {text}
    </button>
  );
};

export default MyButton;
