
import supabase from "@/utils/supabase";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    const { data } = await supabase.from('categories').select("name");
    if(!data) {
        return new NextResponse("no data")
    }
    return data;
}

export async function POST(req: Request) {
    const body = await req.json();
    console.log(body, "12");
    return new Response('ok!')
}