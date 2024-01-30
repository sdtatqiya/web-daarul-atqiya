"use client";

import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { menus } from "../../dataJson/menu";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const home = menus[0];
  const tentangKami: any = menus[1];
  const pendidikan: any = menus[2];
  const usaha: any = menus[3];
  const sosial: any = menus[4];
  return (
    <Popover className="bg-gradient-to-t from-green-500 to-green-700 antialiased bg-no-repeat text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                src="/logo-yayasan-atqiya.jpeg"
                alt=""
                className="h-16 w-auto sm:h-10 rounded-full object-cover"
              />
            </a>
            <div className="ml-4 bold-32 hidden md:block">Sekolah Dasar Terpadu ATQIYA</div>
            <div className="ml-4 bold-32 block md:hidden">SDT ATQIYA</div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <nav>
              <ul className="flex items-center justify-center font-semibold">
                <li className="relative group px-3 py-2">
                  <Link href="/">
                    <button className="hover:opacity-50 cursor-default">
                      Home
                    </button>
                  </Link>
                </li>
                <li className="relative group px-3 py-2">
                  <button className="hover:opacity-50 cursor-default">
                    {tentangKami.label}
                  </button>
                  <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div className="relative z-10">
                        <ul className="mt-3 text-[15px]">
                          {tentangKami.children.map(
                            (item: any, index: number) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                >
                                  {item.label}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group px-3 py-2">
                  <button className="hover:opacity-50 cursor-default">
                    {pendidikan.label}
                  </button>
                  <div className="absolute top-0 -left-6 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>

                      <div className="relative z-10">
                        <div>
                          <ul className="mt-3 text-[15px]">
                            {pendidikan.children.map(
                              (item: any, index: number) => (
                                <li key={index}>
                                  <a
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group px-3 py-2">
                  <button className="hover:opacity-50 cursor-default">
                    {usaha.label}
                  </button>
                  <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div className="relative z-10">
                        <ul className="text-[15px]">
                          {usaha.children.map((item: any, index: number) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group px-3 py-2">
                  <button className="hover:opacity-50 cursor-default">
                    {sosial.label}
                  </button>
                  <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div className="relative z-10">
                        <ul className="text-[15px]">
                          {sosial.children.map((item: any, index: number) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group"
                  >
                    <span className="mr-2">Sign in</span>
                    <svg
                      className="stroke-current"
                      width="10"
                      height="10"
                      strokeWidth="2"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <g fillRule="evenodd">
                        <path
                          className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                          d="M0 5h7"
                        ></path>
                        <path
                          className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </Popover.Group>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-250"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-16 w-auto sm:h-10 rounded-full object-cover"
                    src="/logo-yayasan-atqiya.jpeg"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menus.map((item) => {
                    // TODO: add active state
                    if (item.children && item.children.length > 0) {
                      return (
                        <div className="relative group" key={item.label}>
                          <button
                            key={item.label}
                            onClick={(e) => {
                              e.preventDefault();
                              setMobileMenuOpen(true);
                            }}
                            className="-m-3 w-full flex items-center rounded-md p-3 hover:bg-gray-50 cursor-default"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.label}
                            </span>
                          </button>
                          <div className="hidden top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-full transform">
                            <div className="relative p-3 w-full">
                              <div className="w-10 h-10 bg-white transform rotate-45 top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                              {item.children.map((item: any, index: number) => (
                                <Link
                                  key={item.label}
                                  href="/"
                                  className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                >
                                  <span className="ml-3 text-base font-medium text-gray-900">
                                    {item.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        href="/"
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
