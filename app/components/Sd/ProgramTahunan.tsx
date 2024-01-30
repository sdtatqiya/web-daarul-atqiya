import React from "react";
import { PROGRAMTAHUNAN } from "../../../constants";

const ProgramTahunan = () => {
  return (
    <section className="flex flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className=" max-container padding-container relative w-full flex flex-col justify-center items-center">
        <h2 className="bold-40 lg:bold-64 mt-10 md:mt-0 flex flexCenter w-full">
          Program Tahunan
        </h2>
        <div className="flex w-full flex-col flexCenter">
          <ul className="mt-10 grid gap-5 md:grid-cols-5 lg:mg-2 lg:gap-20">
            {PROGRAMTAHUNAN.map((feature) => (
              <FeatureItem
                key={feature.title}
                image={feature.image}
                title={feature.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  image: string;
  title: string;
};

const FeatureItem = ({ image, title }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-center">
      <div className="relative mb-2 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 h-[250px] sm:h-[200px] md:h-[250px] lg:h-[400px] ">
        <img src={image} alt="gedung-atqiya" className="w-full" />
      </div>
      <h2 className="regular-16 mt-2 bg-white/80 text-gray-30 lg:mt-[10px] lg:bg-none">
        {title}
      </h2>
    </li>
  );
};

export default ProgramTahunan;
