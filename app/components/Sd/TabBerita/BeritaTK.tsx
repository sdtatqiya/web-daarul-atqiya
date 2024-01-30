import React from 'react'
// ** React Imports
import { useState, useEffect } from "react";
// ** Third Party Imports
import { EditorState } from 'draft-js'
// import ReactDraftWysiwyg from '../../react-draft-wysiwyg';

import { useQuill } from "react-quilljs";

// ** Next Import
import dynamic from 'next/dynamic'

// // ** Types
// import { EditorProps } from 'react-draft-wysiwyg'

// // ! To avoid 'Window is not defined' error
// const ReactDraftWysiwyg = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
//   ssr: false
// })

const BeritaTK = () => {
  // ** State
  const [value, setValue] = useState(EditorState.createEmpty());
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log("Text change!");
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  return (
    <div className="flex w-full bg-slate-100 rounded-md p-2 md:p-4 mb-4 md:mb-8 py-4 md:py-8">
      <div className=" max-container relative w-full flex flex-col justify-center items-center overflow-y-scroll scroll-smooth md:scroll-auto">
        <div className=" flex w-full bold-32 mb-10 ">Tambah Berita</div>
        <div className="flex w-full flex-col">
          <div className="flex flex-col justify-center pt-2 mb-4">
            <div className=" flex-1 max-w-[420px] h-full items-center">
              Tanggal
            </div>
            <div className="flex flex-1 w-full mt-2">
              <input
                className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                type="text"
                name="nomorIndukAsalSiswa"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center pt-2 mb-4">
            <div className=" flex-1 max-w-[420px] h-full items-center">
              Judul Berita
            </div>
            <div className="flex flex-1 w-full mt-2">
              <input
                className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                type="text"
                name="nomorIndukAsalSiswa"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center pt-2 mb-4">
            <div className=" flex-1 max-w-[420px] h-full items-center">
              Isi Berita
            </div>
            <div style={{ width: 500, height: 300 }}>
              <div ref={quillRef} />
            </div>
          </div>
          <div className="flex flex-col justify-center pt-2 mb-4">
            <div className=" flex-1 max-w-[420px] h-full items-center">
              Gambar Berita
            </div>
            <div className="flex flex-1 w-full mt-2">
              <input
                className="flex w-full h-10 px-5 rounded-lg border border-slate-900"
                type="text"
                name="nomorIndukAsalSiswa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeritaTK;
