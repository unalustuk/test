import { Bubble } from "../bubble/Bubble"
import styles from "./Main.module.css"

export default function Main({
    data,
    isLoading,
}: {
    data: []
    isLoading: boolean
}) {
    console.log(data)
    if (isLoading) return <p>Loading...</p>
    if (!data || data.length === 0) return <p>No data</p>

    return (
        <div className={styles.mainContainer}>
            {data.map((item: any) => (
                <Bubble key={item.id} item={item} />
            ))}
        </div>
    )
}
