import {Logo} from "@/assets/svg";
import {cn} from "@/lib/utils";
import {raleway, roboto} from "@/assets/fonts";
import {MailIcon, PhoneIcon} from "@/components/layout/Footer/common";

const storeInformation = [
    {title : "Giờ mở cửa", content : ["Thứ 2 - thứ 6: 7h30 - 21h30", "Thứ 7 & Chủ nhật: 7h30 - 14h"]},
    {title : "Địa chỉ", content : ["14 Lê Văn Lương, Trung Hoà, Cầu Giấy, Hà Nội"]},
    {title : "Liên hệ", content : ["cskh@annie.com.vn", "093.501.6564"], icon : [<MailIcon key={1}/>, <PhoneIcon key={2}/>]},
]

export const Contact = () => {
    return (
        <div className="grid grid-cols-4 gap-14 max-w-screen-xl mx-auto w-full pb-8 pt-16">
            <div className="flex flex-col items-center gap-[10px]">
                <Logo className="fill-none"/>
                <span className={cn(raleway.className ,"text-xl font-semibold")}>Annie Gâteaux</span>
            </div>
            {storeInformation.map((info, index) => (
                <div className="flex flex-col gap-6 items-start" key={index}>
                    <span className={cn(raleway.className, "text-xl font-semibold")}>{info.title}</span>
                    <div className="flex flex-col gap-2">
                        {info.content.map((el, index) => (
                            <div className="flex items-center gap-2" key={index}>
                                {info.icon ? info.icon[index] : ""}
                                <span className={cn(roboto.className, "font-normal text-base")}>{el}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}