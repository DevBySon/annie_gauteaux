import {MessageShortcut, PhoneShortcut} from "@/components/layout/QuickContact/common";

export const QuickContact = () => {
    return (
        <div className="fixed top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
            <MessageShortcut className="rounded-full bg-black p-[10px] w-12 h-12 cursor-pointer hover:scale-95"/>
            <PhoneShortcut className="rounded-full bg-black p-[10px] w-12 h-12 cursor-pointer hover:scale-95"/>
        </div>
    )
}