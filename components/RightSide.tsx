import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-20 text-textLight">
      <a href="mailto:jesuiz.design@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
        jesuizmail@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textGray inline-flex"></span>
    </div>
  );
};

export default RightSide;
