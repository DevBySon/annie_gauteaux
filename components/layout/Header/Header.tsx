import Link from "next/link";
import NavBar from "@/components/layout/Header/NavBar";


const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
            <div className="flex justify-between h-[52px] items-center max-w-screen-xl mx-auto">
                <span>Annie Gâuteaux</span>
                <NavBar/>
            </div>
        </header>
    )
}

export default Header