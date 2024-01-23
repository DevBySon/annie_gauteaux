import {raleway} from "@/assets/fonts";
import {cn} from "@/lib/utils";

export const Header = () => {
    return (
        <div className="py-16 bg-slate-50">
            <div className="max-w-screen-lg mx-auto">
                <h1 className={cn(raleway.className, "font-semibold text-[34px] leading-relaxed text-left")}>
                    Annie Gâteaux’s Menu
                </h1>
                <span className={cn(raleway.className, "leading-loose mt-4")}>
                    Để mang lại trải nghiệm đáng nhớ trong từng chiếc bánh, sản phẩm của Annie Gâteaux được làm từ những nguyên liệu chọn lựa cẩn thận và hoàn thiện tỉ mỉ với những tiêu chuẩn cao cấp nhất.
                </span>
            </div>
        </div>
    )
}