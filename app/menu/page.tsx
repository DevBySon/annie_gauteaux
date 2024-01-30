import Header from "@/components/page/menu/Header";
import Footer from "@/components/layout/Footer";
import {default as MenuSm} from "@/components/page/menu/Menu"
import React from "react";

const Menu = ({searchParams} : {searchParams: { ctg: string | null }}) => {
    return (
        <>
            <Header/>
            <MenuSm ctg={searchParams.ctg}/>
            <Footer isSlate/>
        </>
    )
}

export default Menu;