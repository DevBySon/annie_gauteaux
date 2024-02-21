import Header from "@/components/page/menu/Header";
import Footer from "@/components/layout/Footer";
import {default as MenuSm} from "@/components/page/menu/Menu"
import React from "react";
import HeaderLayout from "@/components/layout/Header";

const Menu = ({searchParams} : {searchParams: { ctg: string | null }}) => {
    return (
        <div>
            <HeaderLayout />
            <div>
                <Header/>
                <MenuSm ctg={searchParams.ctg}/>
                <Footer isSlate/>
            </div>
        </div>
    )
}

export default Menu;