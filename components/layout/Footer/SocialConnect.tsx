import {cn} from "@/lib/utils";
import {raleway} from "@/assets/fonts";
import {FacebookIcon, InstagramIcon, LikedInIcon, TwitterIcon} from "@/components/layout/Footer/common";

export const SocialConnect = () => {
    return (
        <div className="flex justify-between max-w-screen-xl mx-auto w-full pt-8 py-16">
            <span className={cn(raleway.className, "font-light text-sm")}>
                ©2023, All right reserved.
            </span>
            <div className="flex gap-3">
                <FacebookIcon className="cursor-pointer"/>
                <InstagramIcon className="cursor-pointer"/>
                <TwitterIcon className="cursor-pointer"/>
                <LikedInIcon className="cursor-pointer"/>
            </div>
        </div>
    )
}