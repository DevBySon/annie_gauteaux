import Link from "next/link";

const menuLinks = [
    {links: "#", title: "Home"},
    {links: './menu', title: "Menu"},
    {links: './about', title: "About"}
]
const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
            <div className="flex justify-between h-[52px] items-center max-w-screen-xl mx-auto">
                <span>Annie Gâuteaux</span>
                <div className="flex items-center gap-4">
                    {menuLinks.map((menu, index) => (
                        <div key={index} className="p-2 cursor-pointer">
                            <Link href={menu.links}>{menu.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header