import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {raleway, roboto} from "@/assets/fonts";
import {cn} from "@/lib/utils";

interface FAQ {
    id: number;
    answer: string;
    question: string;
}

const fetchFAQ = async (): Promise<FAQ[]> => {
    try {
        const response = await fetch(process.env.URL + '/api/faq', {cache: "no-store"});
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export const FAQ = async () => {
    const data = await fetchFAQ();
    return (
        <div className="bg-slate-50">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-8 py-16">
                <h4 className={cn(raleway.className, "font-semibold text-[34px] leading-relaxed")}>
                    Câu hỏi thường gặp
                </h4>
                <Accordion type="single" collapsible className="w-full space-y-6">
                    {data.map(faq => (
                        <AccordionItem value={`faq-${faq.id}`} key={faq.id}>
                            <AccordionTrigger className={cn(raleway.className, "font-medium text-base leading-loose")}>
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent
                                className={cn(roboto.className, "font-normal text-[#666] text-base leading-loose")}>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}