import LoginForm from "./LoginForm"

function generateRandomAnimateBlocks(num: number) {
    if (!num) return []
    return Array.from({ length: num }, () => ({
        position: Math.round(Math.random() * 100) + "%",
        size: Math.round(Math.random() * 100 + 50) + "px",
        delay: Math.round(Math.random() * 10) + "s",
        duration: Math.round(Math.random() * 50 + 10) + "s",
    }))
}

const randomAnimateBlocks = generateRandomAnimateBlocks(16)

export const Login = () => {
    console.log(randomAnimateBlocks)
    return (
        <div className="bg-slate-50 w-screen h-screen flex justify-center items-center">
            <div className="absolute top-50 -translate-y-1/2 z-10 max-w-screen-sm w-full p-5 bg-white rounded-[10px] shadow flex flex-col items-center">
                <LoginForm/>
            </div>
            <div className="bg-slate-50 bg-gradient-to-lt from-slate-50 to-white w-full h-screen">
                <ul className="absolute inset-0 overflow-hidden">
                    {randomAnimateBlocks.map((block, index) => (
                        <li
                            key={index}
                            style={{
                                left: block.position,
                                width: block.size,
                                height: block.size,
                                animationDelay: block.delay,
                                animationDuration: block.duration,
                            }}
                            className={`absolute block bg-transparent/5 animate-sideways -bottom-40`} />
                    ))}
                </ul>
            </div>
        </div>
    )
}