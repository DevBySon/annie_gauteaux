import {SocialConnect} from "@/components/layout/Footer/SocialConnect";
import {Contact} from "@/components/layout/Footer/Contact";
import { Separator } from "@/components/ui/separator"


const Footer = ({ isSlate = false }) => {
    return (
        <div className={`flex flex-col mt-10 ${isSlate ? "bg-slate-50" : ""}`}>
            <Contact />
            <Separator className="bg-black/10"/>
            <SocialConnect />
        </div>
    );
};



export default Footer