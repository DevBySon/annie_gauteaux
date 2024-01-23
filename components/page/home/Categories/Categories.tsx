import Image from "next/image";
import {raleway} from "@/assets/fonts";
import {cn} from "@/lib/utils";
import {LongArrowRight} from "@/assets/svg";

interface Category {
    id: number;
    name: string;
    image: string;
    description: string;
}

const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await fetch(process.env.URL + '/api/categories', {cache: "no-store"});
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }``
}

export const Categories = async () => {
    const data = await fetchCategories();
    return (
        <div className="flex flex-col max-w-screen-lg mx-auto py-16 gap-16">
            {data.map((category, index) => (
                <div className={`flex items-stretch gap-4 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`} key={index}>
                    <div className="relative w-64">
                        <Image src={category.image} alt={category.name} fill style={{objectFit: "contain"}}/>
                    </div>
                    <div className={`flex flex-col gap-4 flex-1 ${index % 2 !== 0 ? "text-right items-end" : ""}`}>
                        <h4 className={cn(raleway.className, "text-[34px] leading-relaxed font-semibold")}>
                            {category.name}
                        </h4>
                        <span className={cn(raleway.className, "leading-loose")}>{category.description}</span>
                        <LongArrowRight className={`${index % 2 !== 0 ? "rotate-180" : ""} cursor-pointer`}/>
                    </div>
                </div>
            ))}
        </div>
    )
}