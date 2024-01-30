import React from 'react'
import ListMenu from './ListMenu';

const Menu = () => {
  return (
    <div className="hidden md:flex flex-1 flex-col max-w-[320px] bg-white min-h-full h-full border-r-2 ">
      <ListMenu title="Profile" icon="/icons/user-circle.svg" />
      <ListMenu title="Berita" icon="/icons/newspaper.svg" />
    </div>
  );
}

export default Menu