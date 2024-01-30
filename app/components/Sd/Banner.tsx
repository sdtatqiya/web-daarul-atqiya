import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 sm:h-[200px] md:h-[250px] lg:h-[400px]">
        <img src={`/images/PPDB.jpg`} alt="gedung-atqiya" className="w-full hidden md:block" />
        <img src={`/images/PPDB-square.jpg`} alt="gedung-atqiya" className="w-full block md:hidden" />
      </div>
    </div>
  );
};

export default Banner;
