import React from "react";
import ProfileContent from "./ProfileContent";
import BeritaContent from "./BeritaContent";

type MenuType = {
  menu: string;
};

const BaseContent = (Props: MenuType) => {
  const { menu } = Props;

  if (menu == "Profile") {
    return (
      <div className="bg-white flex flex-1 h-[87vh] justify-center items-top m-4 p-4 rounded-lg overflow-y-scroll">
        <ProfileContent />
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-1 h-[87vh] justify-center items-top m-4 p-4 rounded-lg overflow-y-scroll">
      <BeritaContent />
    </div>
  );
};

export default BaseContent;
