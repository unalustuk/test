import React from "react"
import styles from "./Modal.module.css"
import Image from "next/image"
import xUrl from "../../../../public/_assets/x-solid.svg?url"
import { Slider } from "@mui/base/Slider"
import CustomSlider from "../inputs/CustomSlider"
import { SelectBox } from "../inputs/SelectBox"

export const Modal = ({
    isOpen,
    onClose,
    handleChange,
    values,
}: {
    isOpen: boolean
    onClose: () => void
    handleChange: (args: { name: string; value: number | number[] }) => void
    values: any
}) => {
    const convertMinsToHrsMins = (mins) => {
        let h = Math.floor(mins / 60)
        let m = Math.round(mins % 60)
        h = h < 10 ? "0" + h : h
        m = m < 10 ? "0" + m : m

        if (h === 24) return `00:${m}`

        return `${h}:${m}`
    }

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
                    <SelectBox
                        name="safari"
                        value={values.safari}
                        handleChange={handleChange}
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
                </div>
            </div>
        </div>
    )
}
