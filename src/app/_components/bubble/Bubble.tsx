import Image from "next/image"
import styles from "./Bubble.module.css"
import React from "react"
import clsx from "clsx"

export const Bubble = ({ item }: { item: any }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    alt="img"
                    src={item.galleries[0].url}
                    width={450}
                    height={250}
                />
            </div>
            <div className={styles.sideContainer}>
                <p className={styles.text}>{item.description}</p>
                <p className={styles.text}>{item.activityLocation.address}</p>
                <p className={styles.text}>Vehicle:{item.vehicle.name}</p>
                <p className={styles.text}>
                    Group Size: {item.routes[0].groupSize}
                </p>
                <div className="flex">
                    <p className={styles.text}>
                        Adult Price: {item.price.adultPrice}$
                    </p>
                    <p className={clsx(styles.text, "ml-4")}>
                        Child Price: {item.price.childPrice}$
                    </p>
                </div>
            </div>
        </div>
    )
}
