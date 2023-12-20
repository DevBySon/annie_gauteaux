import { Raleway, Roboto } from "next/font/google";

export const raleway = Raleway({
    subsets: ["latin"],
    display: "swap",
    fallback: ['roboto', 'san-serif']
})
export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});
