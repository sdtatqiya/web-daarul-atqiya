import React from "react";
import Banner from "./components/Sd/Banner";
import Header from "./components/Sd/Header";
import VisiMisi from "./components/Sd/VisiMisi";
import Footer from "./components/Sd/Footer";
import StatusPendidikan from "./components/Sd/StatusPendidikan";
import TenagaPendidik from "./components/Sd/TenagaPendidik";
import SaranaPendidikan from "./components/Sd/SaranaPendidikan";
import EkstraKurikuler from "./components/Sd/EkstraKurikuler";
import ProgramTahunan from "./components/Sd/ProgramTahunan";
import Blog from "./components/Sd/Blog";

function Page() {
  return (
    <main>
      <Header />
      <Banner />
      <StatusPendidikan />
      <VisiMisi />
      <TenagaPendidik />
      <SaranaPendidikan />
      <Blog />
      <EkstraKurikuler />
      <ProgramTahunan />
      <Footer />
    </main>
  );
}

export default Page;
