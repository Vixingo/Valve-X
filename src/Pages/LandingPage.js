import React from "react";
import Compatible from "../Components/Compatible";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Boxs from "../Components/Boxs";
import Steppers from "../Components/Steppers";
import SendCrypto from "../Components/SendCrypto";
import NftTransfer from "../Components/NftTransfer";
import NeedHelp from "../Components/NeedHelp";

function LandingPage() {
  return (
    <>
      <Header />
      <SendCrypto />
      <Compatible />
      <Boxs />
      <Hero />
      <NftTransfer />
      <Steppers />
      <NeedHelp />
    </>
  );
}

export default LandingPage;
