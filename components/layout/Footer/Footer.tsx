import {SocialConnect} from "@/components/layout/Footer/SocialConnect";
import {QuickContact} from "@/components/layout/Footer/QuickContact";
import { Separator } from "@/components/ui/separator"


const Footer = () => {
    return (
        <div className="flex flex-col mt-10">
            <QuickContact />
            <Separator className="bg-black/10"/>
            <SocialConnect />
        </div>
    )
}

export default Footer