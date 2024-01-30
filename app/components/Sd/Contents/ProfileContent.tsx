import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import ProfileSD from "../TabProfile/ProfileSD";
import ProfileTK from "../TabProfile/ProfileTK";
import ProfileMadrasah from "../TabProfile/ProfileMadrasah";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ProfileContent = () => {

  const [Sekolahan, setSekolahan] = useState({
    TK: {
      Name: "TK ATQIYA"
    },
    SD: {
      Name: "SDT ATQIYA"
    },
    MADRASAH: {
      Name: "Madrasah Dinniyah ATQIYA"
    }
  })
  return (
    <div className="w-full px-2 pt-5 sm:px-0 scroll-smooth md:scroll-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-md bg-gradient-to-t from-green-500 to-green-600 p-2">
          {Object.keys(Sekolahan).map((sekolah) => (
            <Tab
              key={sekolah}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md p-2 md:p-5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {sekolah}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <ProfileTK />
          </Tab.Panel>
          <Tab.Panel>
            <ProfileSD />
          </Tab.Panel>
          <Tab.Panel>
            <ProfileMadrasah />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProfileContent;
