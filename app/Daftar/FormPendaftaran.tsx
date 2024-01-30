import { useState } from "react";

const FormPendaftaran = () => {

  return (
    <section className="flex flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <form>
        <div className=" max-container padding-container pt-5 relative w-full flex flex-col justify-center items-center border rounded-lg border-gray-400">
          <h2 className="bold-40 lg:bold-64 mt-10 md:mt-0 flex flexCenter w-full">
            Form Pendaftaran
          </h2>
          <div className="flex flex-1 flex-col justify-start items-start w-full px-20 py-10 ">
            <div className="flex flex-col lg:min-w-[1208px] w-full flex-1">
              <h5 className="bold-20">I. SISWA</h5>
              <div className="ml-10">
                <div>
                  <div>1. Nama</div>
                  <div className="flex flex-1 flex-col ml-5 pt-3 w-full">
                    <div className="flex flex-1 justify-between pr-10">
                      <div className="flex-1 max-w-[400px] h-full items-center">
                        a. Nama Lengkap
                      </div>
                      <div className="flex flex-1">
                        <input
                          className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                          type="text"
                          name="namaLengkapSiswa"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center pr-10 pt-2">
                      <div className=" flex-1 max-w-[400px] h-full items-center">
                        b. Nama Penggilan
                      </div>
                      <div className="flex flex-1 ">
                        <input
                          className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                          type="text"
                          name="namaPanggilanSiswa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    2. Nomor Induk Asal
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="nomorIndukAsalSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    2. Nomor Induk Asal
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="nomorIndukAsalSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    3. NISN
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="NISNSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    4. Tempat Tgl Lahir
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="tempatTglLahirSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    5. Jenis Kelamin
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="jenisKelaminSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    6. Agama
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="agamaSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    7. Anak Ke
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="anakKeSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    8. Status anak dalam keluarga
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="anakKeSiswa"
                    />
                  </div>
                </div>
                <div>
                  <div>9. Alamat Siswa</div>
                  <div className="flex flex-1 flex-col ml-5 pt-3 w-full">
                    <div className="flex flex-1 justify-between pr-10">
                      <div className="flex-1 max-w-[400px] h-full items-center">
                        a. Alamat
                      </div>
                      <div className="flex flex-1">
                        <input
                          className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                          type="text"
                          name="namaLengkapSiswa"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center pr-10 pt-2">
                      <div className=" flex-1 max-w-[400px] h-full items-center">
                        b. Telepon/HP
                      </div>
                      <div className="flex flex-1 ">
                        <input
                          className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                          type="text"
                          name="teleponHpSiswa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="bold-20 mt-10">II. ORANG TUA KANDUNG</h5>
              <div className="ml-10">
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    a. Nama lengkap Ayah
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="namaLengkapAyahSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    b. Nama lengkap Ibu
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="namaLengkapIbuSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    c. Alamat Ayah
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="alamatAyahSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    d. Alamat Ibu
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="alamatIbuSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    e. Telepon/HP
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="telponHpOrangTuaSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    f. Pekerjaan Ayah
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="pekerjaanAyahSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    g. Pekerjaan Ibu
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="pekerjaanIbuSiswa"
                    />
                  </div>
                </div>
                <div>
                  <div>h. Pendidikan Terakhir Orang Tua </div>
                  <div className="flex flex-1 flex-col ml-5 pt-3 w-full">
                    <div className="flex flex-1 justify-between pr-10">
                      <div className="flex-1 max-w-[400px] h-full items-center">
                        1. Ayah
                      </div>
                      <div className="flex flex-1">
                        <input
                          className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                          type="text"
                          name="pendidikanTerakhirAyahSiswa"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center pr-10 pt-2">
                      <div className=" flex-1 max-w-[400px] h-full items-center">
                        2. Ibu
                      </div>
                      <div className="flex flex-1 ">
                        <input
                          className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                          type="text"
                          name="pendidikanTerakhirIbuSiswa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    i. Penghasilan perbulan Ayah
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="penghasilanPerbulanAyahSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    j. Penghasilan perbulan Ibu
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="penghasilanPerbulanIbuSiswa"
                    />
                  </div>
                </div>
              </div>

              <h5 className="bold-20 mt-10">III. ORANG TUA WALI</h5>
              <div className="ml-10">
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    a. Nama lengkap Ayah Wali
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="namaLengkapAyahWaliSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    b. Nama lengkap Ibu Wali
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="namaLengkapIbuWaliSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    c. Alamat Ayah Wali
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="alamatAyahWaliSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    d. Alamat Ibu Wali
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="alamatIbuWaliSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    e. Telepon/HP
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="telponHpWaliSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    f. Pekerjaan Ayah Wali
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="pekerjaanAyahWaliSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    g. Pekerjaan Ibu Wali
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="pekerjaanIbuWaliSiswa"
                    />
                  </div>
                </div>
                <div>
                  <div>h. Pendidikan Terakhir Orang Tua</div>
                  <div className="flex flex-1 flex-col ml-5 pt-3 w-full">
                    <div className="flex flex-1 justify-between pr-10">
                      <div className="flex-1 max-w-[400px] h-full items-center">
                        1. Ayah
                      </div>
                      <div className="flex flex-1">
                        <input
                          className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                          type="text"
                          name="PendidikanAyahWaliSiswa"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center pr-10 pt-2">
                      <div className=" flex-1 max-w-[400px] h-full items-center">
                        2. Ibu
                      </div>
                      <div className="flex flex-1 ">
                        <input
                          className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                          type="text"
                          name="pendidikanIbuWaliSiswa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    i. Penghasilan perbulan Ayah
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="penghasilanPerbulanAyahWaliSiswa"
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center pr-5 pt-2">
                  <div className=" flex-1 max-w-[420px] h-full items-center">
                    j. Penghasilan perbulan Ibu
                  </div>
                  <div className="flex flex-1 ">
                    <input
                      className="flex w-3/4 h-10 px-5 rounded-lg border border-slate-900"
                      type="text"
                      name="penghasilanPerbulanIbuWaliSiswa"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-10 flex justify-between float-right items-end w-full px-10">
            <div className=" flex-1 bg-slate-400 w-full"></div>
            <button
              className={`bg-blue-500 p-2 px-4 mr-10  text-white rounded hover:bg-blue-700 hover:shadow-xl`}
              type="submit"
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FormPendaftaran;
