"use client"

import {ReactNode} from "react";
import Link, {LinkProps} from "next/link";
import {cn} from "@/lib/utils";
import {CartIcon} from "@/assets/svg";
import {useSelectedLayoutSegment} from "next/navigation";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {raleway} from "@/assets/fonts";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

const menuLinks = [
    {links: "./", title: "Home"},
    {links: './menu', title: "Menu"},
    {links: './about', title: "About"}
]

const NavItem = ({active, children, ...rest}: { active: boolean, children: ReactNode } & LinkProps) => {
    return (
        <Link className={cn(
            `relative px-2 my-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-transform
            after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 font-medium text-black`
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
               <Sheet>
                   <SheetTrigger><CartIcon/></SheetTrigger>
                   <SheetContent className="bg-white">
                       <SheetHeader>
                           <SheetTitle className={cn(raleway.className, "text-[22px] font-semibold leading-[181%]")}>
                               Giỏ hàng
                           </SheetTitle>
                           <SheetDescription>
                               <Separator className="my-8 mb-1 bg-slate-300"/>
                               This action cannot be undone. This will permanently delete your account
                               and remove your data from our servers.
                               <Separator className="mb-8 mt-1 bg-slate-300"/>
                               <div className="flex items-center justify-between">
                                   <p className={cn(raleway.className, "text-[20px] leading-[181%] font-semibold")}>
                                       Tạm tính
                                   </p>
                                   <p>đ</p>
                               </div>
                               <Button className={"mt-16 mx-2 w-full p-2"}>
                                   <Link href="#" className={cn(raleway.className, "text-[20px] leading-[181%]")}>
                                        Thanh toán
                                   </Link>
                               </Button>
                           </SheetDescription>
                       </SheetHeader>
                   </SheetContent>
               </Sheet>
       </div>
   )
    }

export default NavBar