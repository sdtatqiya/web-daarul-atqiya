import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { PROFILESEKOLAH } from "../../../../constants";

const ProfileMadrasah = () => {
  const [data, setData] = useState(PROFILESEKOLAH.MADRASAH);

  return (
    <div className="flex w-full bg-slate-100 rounded-md p-2 md:p-4 mb-4 md:mb-8 py-4 md:py-8 ">
      <div className=" max-container relative w-full flex flex-col justify-center items-center overflow-y-scroll scroll-smooth md:scroll-auto">
        <div className="flex flex-col sm:flex-row w-full min-h-[300px] gap-2 xl:gap-x-6">
          <div className="flex flex-col gap-2 md:gap-4 w-full max-w-sm max-h-[800px] bg-white rounded-md p-4 lg:px-8  items-start justify-start">
            <img
              src="/logo-yayasan-atqiya.jpeg"
              alt="logo-profile-sd"
              className="rounded-md"
            />
            <div className="w-full mt-4">
              <div className=" text-xs text-gray-500 font-light ">
                Nama Sekolah
              </div>
              <div className=" text-lg text-gray-500 font-semibold mb-2 lg:mb-4 ">
                {data.nama}
              </div>
              <div className=" text-xs text-gray-500 font-light ">Alamat</div>
              <div className=" text-lg text-gray-500 font-semibold mb-2 lg:mb-4 ">
                {data.alamat}
              </div>
              <div className=" text-xs text-gray-500 font-light ">
                Sertifikasi
              </div>
              <div className=" text-lg text-gray-500 font-semibold mb-2 lg:mb-4 ">
                {data.sertifikasi}
              </div>
              <div className=" text-xs text-gray-500 font-light ">
                Akreditasi
              </div>
              <div className=" text-lg text-gray-500 font-semibold mb-2 lg:mb-4 ">
                {data.akreditasi}
              </div>
              <div className=" text-xs text-gray-500 font-light ">Kontak</div>
              <div className=" text-lg text-gray-500 font-semibold mb-2 lg:mb-4 ">
                {data.kontak}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white rounded-md p-4 lg:p-8">
            <div className=" flex w-full bold-40 mb-10 ">Form Edit</div>
            <form>
              <div className="text-lg mb-2">Identitas Sekolah</div>
              <div className="flex w-full flex-col">
                <div className="flex flex-col justify-center pt-2 mb-4">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    Nama Sekolah
                  </div>
                  <div className="flex flex-1 w-full mt-2">
                    <input
                      className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="nomorIndukAsalSiswa"
                      defaultValue={data.nama}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center pt-2 mb-4">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    Alamat Sekolah
                  </div>
                  <div className="flex flex-1 w-full mt-2">
                    <input
                      className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="nomorIndukAsalSiswa"
                      defaultValue={data.alamat}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center pt-2 mb-4">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    Sertifikasi Sekolah
                  </div>
                  <div className="flex flex-1 w-full mt-2">
                    <input
                      className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="nomorIndukAsalSiswa"
                      defaultValue={data.sertifikasi}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center pt-2 mb-4">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    Akreditasi Sekolah
                  </div>
                  <div className="flex flex-1 w-full mt-2">
                    <input
                      className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="nomorIndukAsalSiswa"
                      defaultValue={data.akreditasi}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center pt-2 mb-4">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    Kontak Sekolah
                  </div>
                  <div className="flex flex-1 w-full mt-2">
                    <input
                      className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="nomorIndukAsalSiswa"
                      defaultValue={data.kontak}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-grow border-t border-gray-400 py-5 mt-8"></div>
              {/* VISI MISI */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-lg font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500/75">
                      <span>Visi Misi Sekolah</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-green-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      <div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Visi Sekolah
                            </div>
                            <div className="flex flex-1 w-full mt-2">
                              <input
                                className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                                type="text"
                                name="nomorIndukAsalSiswa"
                                defaultValue={data.visi[0].title}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Misi Sekolah
                            </div>
                            <div>
                              <div className=" flex-1 mt-2 max-w-[420px] h-full items-center">
                                Misi 1
                              </div>
                              <div className="flex flex-1 w-full mt-2">
                                <input
                                  className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                                  type="text"
                                  name="nomorIndukAsalSiswa"
                                  defaultValue={data.misi[0].title}
                                />
                              </div>
                            </div>
                            <div>
                              <div className=" flex-1 mt-2 max-w-[420px] h-full items-center">
                                Misi 2
                              </div>
                              <div className="flex flex-1 w-full mt-2">
                                <input
                                  className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                                  type="text"
                                  name="nomorIndukAsalSiswa"
                                  defaultValue={data.misi[1].title}
                                />
                              </div>
                            </div>
                            <div>
                              <div className=" flex-1 mt-2 max-w-[420px] h-full items-center">
                                Misi 3
                              </div>
                              <div className="flex flex-1 w-full mt-2">
                                <input
                                  className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                                  type="text"
                                  name="nomorIndukAsalSiswa"
                                  defaultValue={data.misi[2].title}
                                />
                              </div>
                            </div>
                            <div>
                              <div className=" flex-1 mt-2 max-w-[420px] h-full items-center">
                                Misi 4
                              </div>
                              <div className="flex flex-1 w-full mt-2">
                                <input
                                  className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                                  type="text"
                                  name="nomorIndukAsalSiswa"
                                  defaultValue={data.misi[3].title}
                                />
                              </div>
                            </div>
                            <div>
                              <div className=" flex-1 mt-2 max-w-[420px] h-full items-center">
                                Misi 5
                              </div>
                              <div className="flex flex-1 w-full mt-2">
                                <input
                                  className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                                  type="text"
                                  name="nomorIndukAsalSiswa"
                                  defaultValue={data.misi[4].title}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <div className="flex-grow border-t border-gray-400 py-5 mt-8"></div>

              {/* SARANA PENDIDIKAN */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-lg font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500/75">
                      <span>Sarana Pendidikan</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-green-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      <div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 1
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[0].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[0].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.saranapendidikan[0].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 2
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[1].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[1].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 3
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[2].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[2].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 4
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[3].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[3].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 5
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[4].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[4].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 6
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[5].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[5].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 7
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[6].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[6].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 8
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[7].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[7].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 9
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[8].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[8].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Sarana 10
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.saranapendidikan[9].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.saranapendidikan[9].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <div className="flex-grow border-t border-gray-400 py-5 mt-8"></div>

              {/* EKSTRA KURIKULER */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-lg font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500/75">
                      <span>Ekstra Kurikuler</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-green-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      <div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 1
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[0].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[0].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[0].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 2
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[1].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[1].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[1].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 3
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[2].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[2].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[2].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 4
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[3].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[3].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[3].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 5
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[4].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[4].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[4].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 6
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[5].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[5].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[5].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 7
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[6].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[6].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[6].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 8
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[7].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[7].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[7].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 9
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[8].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[8].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[8].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Ekstra Kurikuler 10
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.ekstrakurikuler[9].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.ekstrakurikuler[9].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.ekstrakurikuler[9].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <div className="flex-grow border-t border-gray-400 py-5 mt-8"></div>

              {/* PROGRAM TAHUNAN */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-lg font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500/75">
                      <span>Program Tahunan</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-green-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      <div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Program 1
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.programtahunan[0].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.programtahunan[0].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.programtahunan[0].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Program 2
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.programtahunan[1].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.programtahunan[1].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.programtahunan[1].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Program 3
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.programtahunan[2].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.programtahunan[2].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.programtahunan[2].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Program 4
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.programtahunan[3].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.programtahunan[3].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.programtahunan[3].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col justify-center pt-2 mb-4">
                            <div className=" flex-1 max-w-[420px] h-full items-center">
                              Program 5
                            </div>
                            <div className="flex flex-1 w-full mt-2 gap-4">
                              <img
                                src={data.programtahunan[4].image}
                                className="flex w-1/4 max-h-[300px] rounded-lg border border-slate-900"
                              />
                              <div className="flex w-full flex-col gap-4 justify-start items-start">
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Nama
                                  </div>
                                  <input
                                    className="flex w-full h-10 px-5 mt-2 rounded-lg border border-slate-900"
                                    type="text"
                                    name="nomorIndukAsalSiswa"
                                    defaultValue={data.programtahunan[4].title}
                                  />
                                </div>
                                <div className="flex w-full flex-col">
                                  <div className=" flex-1 max-w-[420px] h-full items-center">
                                    Deskripsi
                                  </div>
                                  <textarea className="flex w-full mt-2 px-4 py-2 resize-y rounded-md border border-slate-900">
                                    {data.programtahunan[4].description}
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMadrasah;
