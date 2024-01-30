import {cn} from "@/lib/utils";

export const Slider = ({children, className, ...props}) => {
    return (
        <div
            className={cn("bg-transparent shadow h-full m-auto overflow-hidden relative w-full", className)}
            {...props}
        >
            {children}
        </div>
    )
}

export const SliderTrack = ({children, className, ...props}) => (
    <div
        className={cn("animate-scroll flex w-full", className)}
        {...props}
    >
        {children}
    </div>
)

export const Slide = ({children, className, width, height, ...props}) => (
    <div
        className={className}
        style={{width: width, height: height}}
        {...props}
    >
        {children}
    </div>
)