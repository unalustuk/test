import React from "react"
import styles from "./Modal.module.css"
import Image from "next/image"
import xUrl from "../../../../public/_assets/x-solid.svg?url"
import { Slider } from "@mui/base/Slider"
import CustomSlider from "../inputs/CustomSlider"
import { SelectBox } from "../inputs/SelectBox"
import { SelectBoxes } from "./selectBoxes/SelectBoxes"
import CustomButton from "../inputs/CustomButton"

export const Modal = ({
    isOpen,
    onClose,
    handleChange,
    values,
    resetValues,
    search,
}: {
    isOpen: boolean
    onClose: () => void
    handleChange: (args: { name: string; value: number | number[] }) => void
    values: any
    resetValues: () => void
    search: () => void
}) => {
    const convertMinsToHrsMins = (mins) => {
        let h = Math.floor(mins / 60)
        let m = Math.round(mins % 60)
        h = h < 10 ? "0" + h : h
        m = m < 10 ? "0" + m : m

        if (h === 24) return `00:${m}`

        return `${h}:${m}`
    }

    const obj1 = [
        {
            name: "islandTour",
            text: "Island Tour",
        },
        {
            name: "landTour",
            text: "Land Tour",
        },
        {
            name: "safari",
            text: "Safari",
        },
    ]

    const obj2 = [
        {
            name: "swimming",
            text: "Swimming",
        },
        {
            name: "running",
            text: "Running",
        },
        {
            name: "elephant",
            text: "Elephant",
        },
        {
            name: "snorkel",
            text: "Snorkel",
        },
    ]
    const obj3 = [
        {
            name: "yacht",
            text: "Yacht",
        },
        {
            name: "speedboat",
            text: "Speedboat",
        },
        {
            name: "catamaran",
            text: "Catamaran",
        },
        {
            name: "speedCatamaran",
            text: "Speed Catamaran",
        },
    ]

    const obj4 = [
        {
            name: "transfer",
            text: "Transfer",
        },
        {
            name: "halalFood",
            text: "Halal Food",
        },
        {
            name: "vegetarianFood",
            text: "Vegetarian Food",
        },
    ]

    if (!isOpen) return null

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContent}>
                <div className="flex flex-row justify-between items-center">
                    <div className={styles.modalTitle}>TOURS</div>
                    <div
                        onClick={onClose}
                        className="w-4 h-4  flex flex-row justify-center"
                    >
                        <Image alt="x" src={xUrl} width={12} height={12} />
                    </div>
                </div>

                <div className={styles.modalInputsContainer}>
                    <p className={styles.title}>Theme</p>
                    <SelectBoxes
                        handleChange={handleChange}
                        values={values}
                        names={obj1}
                    />

                    <div className={styles.modalInputContainer}>
                        <p className={styles.title}>Price</p>
                        <div className={styles.inputBottom}>
                            <div style={{ width: "60%", paddingTop: 7 }}>
                                <CustomSlider
                                    max={10000}
                                    name={"price"}
                                    handleChange={handleChange}
                                    value={values.price}
                                />
                            </div>
                            <div className={styles.inputLabel}>
                                {values.price}$
                            </div>
                        </div>
                    </div>
                    <div className={styles.modalInputContainer}>
                        <p className={styles.title}>Start Time</p>
                        <div className={styles.inputBottom}>
                            <div style={{ width: "60%", paddingTop: 7 }}>
                                <CustomSlider
                                    max={1440}
                                    name={"time"}
                                    handleChange={handleChange}
                                    value={values.time}
                                />
                            </div>
                            <div className={styles.inputLabel}>
                                {convertMinsToHrsMins(values.time)}
                            </div>
                        </div>
                    </div>
                    <div className={styles.modalInputContainer}>
                        <p className={styles.title}>Group Size</p>
                        <div className={styles.inputBottom}>
                            <div style={{ width: "60%", paddingTop: 7 }}>
                                <CustomSlider
                                    max={50}
                                    name={"size"}
                                    handleChange={handleChange}
                                    value={values.size}
                                />
                            </div>
                            <div className={styles.inputLabel}>
                                {values.size}
                            </div>
                        </div>
                    </div>
                    <p className={styles.title}>Vehicle</p>
                    <SelectBoxes
                        handleChange={handleChange}
                        values={values}
                        names={obj2}
                    />
                    <p className={styles.title}>Features</p>
                    <SelectBoxes
                        handleChange={handleChange}
                        values={values}
                        names={obj3}
                    />
                </div>
                <div className="flex flex-row justify-between items-center mt-4">
                    <CustomButton text="Reset" onClick={resetValues} />
                    <CustomButton
                        className="ml-auto"
                        text="Search"
                        onClick={search}
                    />
                </div>
            </div>
        </div>
    )
}
