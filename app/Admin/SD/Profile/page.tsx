"use client";

import React, { useEffect, useState } from "react";
import Menu from "../../../components/Sd/Sidebar/Menu";
import Header from "../../../components/Sd/Header";
import BaseContent from "../../../components/Sd/Contents/BaseContent";

const Profile = () => {
  const [menuSelected, setMenuSelected] = useState("Profile");

  return (
    <div>
      <Header />
      <div className="content flex justify-items-start h-full bg-slate-100">
        <Menu />
        <BaseContent menu={menuSelected} />
      </div>
    </div>
  );
};

export default Profile;
