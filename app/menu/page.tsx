import Header from "@/components/page/menu/Header";
import Footer from "@/components/layout/Footer";
import {default as MenuSm} from "@/components/page/menu/Menu"
import React from "react";

const Menu = () => {
    return (
        <>
            <Header/>
            <MenuSm/>
            <Footer isSlate/>
        </>
    )
}

export default Menu;