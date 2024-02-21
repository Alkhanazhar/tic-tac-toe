import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div
      className="border h-[100px] w-[100px] border-gray-600 flex items-center justify-center text-4xl bg-white shadow-2xl"
      onClick={onClick}
    >
      <h5>{value}</h5>
    </div>
  );
};

export default Square;
