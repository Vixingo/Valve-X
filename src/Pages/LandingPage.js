import React from "react";
import Compatible from "../components/Compatible";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Boxs from "../components/Boxs";
import Steppers from "../components/Steppers";
import SendCrypto from "../components/SendCrypto";
import NftTransfer from "../components/NftTransfer";
import NeedHelp from "../components/NeedHelp";

function LandingPage() {
    return (
        <>
            <Header />
            <SendCrypto />
            <Compatible />
            <Boxs />
            <Steppers />
            <Hero />
            <NftTransfer />
            <NeedHelp />
        </>
    );
}

export default LandingPage;
