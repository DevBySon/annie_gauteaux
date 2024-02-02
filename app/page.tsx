import Header from "@/components/page/home/Header";
import QuickInsight from "@/components/page/home/QuickInsight";
import QuickContact from "@/components/layout/QuickContact";
import Footer from "@/components/layout/Footer";
import Categories from "@/components/page/home/Categories";
import FAQ from "@/components/page/home/FAQ";
import HeaderLayout from "@/components/layout/Header";

export default function Home() {
    return (
        <>
            <HeaderLayout />
            <QuickContact />
            <div>
                <Header />
                <QuickInsight />
                <Categories />
                <FAQ />
                <Footer />
            </div>
        </>
    )
}
