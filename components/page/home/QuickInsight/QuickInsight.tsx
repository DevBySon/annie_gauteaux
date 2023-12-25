import {raleway, roboto} from "@/assets/fonts";
import {cn} from "@/lib/utils";

const quickInsightRewards = [
    {quantity: "+100.000", content: "Chiếc bánh đã được bán ra"},
    {quantity: "20.000", content: "Khách hàng thân thiết"},
    {quantity: "10", content: "Năm kinh nghiệm từ chuyên gia"}
]

export const QuickInsight = () => {
    return (
        <div className="bg-slate-50">
            <div className="max-w-screen-lg mx-auto py-16 flex flex-col items-center w-full gap-8">
                <h4 className={cn(raleway.className, "font-semibold text-[30px] leading-[188%]")}>
                    Về Annie Gâteaux
                </h4>
                <div className="grid grid-cols-3 gap-16 w-full">
                    {quickInsightRewards.map((reward, index) => (
                        <div className="flex items-center gap-2" key={index}>
                        <span className={cn(roboto.className, "text-[34px] font-normal leading-relaxed")}>
                            {reward.quantity}
                        </span>
                            <span className={cn(raleway.className, "leading-loose w-full")}>
                            {reward.content}
                        </span>
                        </div>
                    ))}
                </div>
                <span className={cn(raleway.className, "leading-loose text-center")}>
                Được định hình là thương hiệu bánh ngọt chuẩn Pháp, Annie Gâteaux trao tới bạn hơn cả một chiếc bánh ngọt – đó là niềm hạnh phúc khi thưởng thức cùng những người mà bạn yêu thương.
            </span>
            </div>
        </div>
    )
}