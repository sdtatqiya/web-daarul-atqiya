import React from "react";
import Header from "../components/Sd/Header";
import Footer from "../components/Sd/Footer";
import FormPendaftaran from "./FormPendaftaran";

const page = () => {
  return (
    <main>
      <Header />
      <FormPendaftaran />
      <Footer />
    </main>
  );
};

export default page;
