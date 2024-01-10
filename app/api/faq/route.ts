import {NextResponse} from "next/server";
import supabase from "@/lib/supabase/server";

export async function GET(request: Request) {
    const { data } = await supabase.from('FAQ').select();
    if(!data) {
        return new NextResponse("no data")
    }
    return NextResponse.json(data);
}