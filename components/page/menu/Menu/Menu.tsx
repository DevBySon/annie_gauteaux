import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {raleway} from "@/assets/fonts";
import {cn} from "@/lib/utils";
import Image from "next/legacy/image";

interface Cake {
    name: string;
    price: number;
    ingredients: string[];
    image: string;
    category: string;
}

const fetchMenu = async (): Promise<Cake[]> => {
    try {
        const response = await fetch(process.env.URL + '/api/menu', {cache: "no-cache"});
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}


export const Menu = async () => {
    const data = await fetchMenu();

    // Group cake by category
    const groupedCakes = data.reduce((acc, cake) => {
        const category = cake.category;
        acc[category] = acc[category] || [];
        acc[category].push({ ...cake});
        return acc;
    }, {});

    const categories = Object.keys(groupedCakes)

    return (
        <div className="max-w-screen-lg mx-auto">
            <Tabs defaultValue={categories[0]} className="w-full">
                <TabsList className="w-full justify-center gap-2 my-8">
                    {categories.map((category, index) => (
                        <TabsTrigger
                            value={category}
                            key={index}
                            className="relative px-[10px] my-[10px] after:absolute after:bottom-0 after:left-0 after:h-0.5
                            after:transition-transform after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100
                            text-[22px] leading-[181%] font-semibold min-w-[168px] data-[state=active]:shadow-none">
                            {category}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {categories.map((category, index) => (
                    <TabsContent value={category} key={index}>
                        <div className="grid grid-cols-3 gap-4">
                            {groupedCakes[category].map((cake : Cake, index : number) => (
                              <div key={index} className="flex flex-col items-center p-4 gap-4 hover:shadow-xl cursor-pointer">
                                  <div className="relative aspect-square w-full">
                                      <Image src={cake.image} alt={cake.name} fill objectFit="contain" className="py-10"/>
                                  </div>
                                  <div className="flex flex-col w-full">
                                      <span className={cn(raleway.className, "text-[22px] leading-[181%] font-semibold")}>
                                          {cake.name}
                                      </span>
                                      <span className={cn(raleway.className, "text-base leading-loose font-normal")}>
                                          {cake.ingredients.toString().replaceAll(",", ", ")}
                                      </span>
                                      <span className="text-[22px] leading-[181%]">{cake.price.toLocaleString() + "đ"}</span>
                                  </div>
                              </div>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}