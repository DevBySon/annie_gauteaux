import {NotFoundDecoration} from "@/assets/svg";
import {raleway} from "@/assets/fonts";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col relative items-center">
            <NotFoundDecoration className="fill-none absolute right-1/2 top-14"/>
            <div className="flex flex-col gap-4 mt-52 mx-auto items-center">
                <h4 className={cn(raleway.className, "text-2xl font-semibold leading-[183%]")}>
                    Trang bạn tìm kiếm không tồn tại
                </h4>
                <div className="flex flex-col">
                    <span className={cn(raleway.className, "leading-loose")}>
                        Một số nguyên nhân phổ biến:
                    </span>
                    <ul className={cn(raleway.className,"list-disc leading-loose ml-6")}>
                        <li>Website đang thực hiện bảo trì trang, bạn vui lòng truy cập lại sau</li>
                        <li>Đường link bị sai một vài ký tự nào đó</li>
                        <li>Trang bạn truy cập bị gỡ khỏi hệ thống</li>
                    </ul>
                </div>
            </div>
            <Button variant="default" className={cn(raleway.className,"w-fit leading-loose mt-14")}>
                <Link href="/">Về trang chủ</Link>
            </Button>
        </div>
    )
}