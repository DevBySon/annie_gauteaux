
const fetchCategories = async () => {
    const data = await fetch('http://localhost:3001/api/home', {
        method: "GET"
    })
    return data
}

export const Categories = async () => {
    const data = await fetchCategories();
    console.log(data)
    return (
        <div className="flex flex-col">
            {/*<button onClick={fetchCategories}>Fetch</button>*/}
        </div>
    )
}