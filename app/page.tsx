import Header from "@/components/page/home/Header";
import QuickInsight from "@/components/page/home/QuickInsight";
import QuickContact from "@/components/layout/QuickContact";
import Footer from "@/components/layout/Footer";
import React from "react";
import Categories from "@/components/page/home/Categories";
import FAQ from "@/components/page/home/FAQ";

export default function Home() {
    return (
        <>
            <QuickContact/>
            <div>
                <Header/>
                <QuickInsight/>
                <Categories/>
                <FAQ/>
                <Footer/>
            </div>
        </>
    )
}
