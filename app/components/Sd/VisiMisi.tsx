import React from "react";
import { MISI, VISI } from "../../../constants";

const VisiMisi = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="padding-container ml-0 md:ml-[200px] lg:ml-[500px] relative w-full">
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <h2 className="bold-40 lg:bold-64">Visi</h2>
          <ul className="mt-2 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            <li className="flex w-full flex-1 flex-col items-start">
              <p className="regular-16 mt-2 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                {VISI[0].title}
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 lg:min-h-[50px]"></div>
      </div>
      <div className="padding-container ml-0 md:ml-[150px] lg:ml-[250px] relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[350px]"></div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <h2 className="bold-40 lg:bold-64 mt-10 md:mt-0">Misi</h2>

          <ul className="mt-2 grid gap-1 md:grid-cols-1 lg:mg-4 lg:gap-2">
            {MISI.map((feature) => (
              <FeatureItem key={feature.title} title={feature.title} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
};

const FeatureItem = ({ title }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <h2 className="regular-16 mt-2 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {title}
      </h2>
    </li>
  );
};

export default VisiMisi;
