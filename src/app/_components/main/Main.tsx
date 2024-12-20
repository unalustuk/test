export default function Main({
    data,
    isLoading,
}: {
    data: any
    isLoading: boolean
}) {
    console.log(data)
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>

    return (
        <div className="flex  ">
            <h1>{data.products[0].id}</h1>
        </div>
    )
}
