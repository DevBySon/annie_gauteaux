import {raleway} from "@/assets/fonts";
import {cn} from "@/lib/utils";
import {HeaderImg} from "@/components/page/home/Header/common";

export const Header = () => {
    return (
        <div className="pt-8 pb-[86px] flex flex-col items-center">
            <h1 className={cn(raleway.className, "font-semibold text-[64px] leading-tight")}>
                Flavors & Loved
            </h1>
            <h4 className={cn(raleway.className, "text-[26px] leading-loose")}>
                Ones Meet
            </h4>
            <HeaderImg className="w-full pt-32"/>
        </div>
    )
}