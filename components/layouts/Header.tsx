import React, { useEffect, useState } from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Header = ({ width }: { width: number; }) => {

    return (
        <header className="header-panel primary-layout ">
            {width >= 768 ? <MenuDesktop /> : <MenuMobile />}
        </header>
    );
};

export default Header;
