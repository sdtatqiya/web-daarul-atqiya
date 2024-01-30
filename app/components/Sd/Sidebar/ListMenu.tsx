import React from 'react'

type ListMenuType = {
  title: string;
  icon: string;
}

const ListMenu = (props: ListMenuType) => {

  const {title, icon} = props

  return (
    <div className="flex flex-1 w-full bg-white max-h-[65px] justify-center items-center border-b-2 border-b-slate-300 hover:bg-green-100 rounded-md">
      <div className="flex w-full m-2 gap-2 justify-start">
        <img
          src={icon}
          alt={"icon " + icon}
          className="icon w-[24px] h-[24px]"
        />
        <div className=' text-lg text-green-700'>{title}</div>
      </div>
    </div>
  );
}

export default ListMenu