import supabase from "@/lib/supabase/server";
import {NextResponse} from "next/server";

export async function GET() {
    const {data} =
        await supabase.from("cakes").select("name, ingredients, price, image, category");
    if(!data) {
        return new NextResponse("no data")
    }
    return NextResponse.json(data)
}