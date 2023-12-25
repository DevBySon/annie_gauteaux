"use client"

import {ReactNode} from "react";
import Link, {LinkProps} from "next/link";
import {cn} from "@/lib/utils";
import {CartIcon} from "@/assets/svg";
import {useSelectedLayoutSegment} from "next/navigation";

const menuLinks = [
    {links: "./", title: "Home"},
    {links: './menu', title: "Menu"},
    {links: './about', title: "About"}
]

const NavItem = ({active, children, ...rest}: { active: boolean, children: ReactNode } & LinkProps) => {
    return (
        <Link className={cn(
            `relative p-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-transform
            after:content-[''] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 font-medium text-black`
        )}{...rest}>
            {children}
        </Link>
    )
}

const NavBar = () => {
    const segment = useSelectedLayoutSegment()
   return (
       <div className="flex items-center gap-4">
           {menuLinks.map((menuItem, index) => (
                <NavItem active={false} href={menuItem.links} key={index}>
                    {menuItem.title}
                </NavItem>
           ))}
           <NavItem active={false} href="/cart">
               <CartIcon/>
           </NavItem>
       </div>
   )
    }

export default NavBar