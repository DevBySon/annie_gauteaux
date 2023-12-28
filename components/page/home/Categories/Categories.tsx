"use client"


import supabase from "@/utils/supabase";

const fetchCategories = async () => {
    await fetch('/api/home')
}
export const Categories = async () => {
    const data = fetchCategories();
    return (
        <div className="flex flex-col">
            {/*<button onClick={fetchCategories}>Fetch</button>*/}
        </div>
    )
}