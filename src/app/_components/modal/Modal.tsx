import React from "react"
import styles from "./Modal.module.css"
import Image from "next/image"
import xUrl from "../../../../public/_assets/x-solid.svg?url"
import { Slider } from "@mui/base/Slider"
import CustomSlider from "../inputs/CustomSlider"

export const Modal = ({
    isOpen,
    onClose,
    children,
    handleChange,
}: {
    isOpen: boolean
    onClose: () => void
    handleChange: (args: { name: string; value: number | number[] }) => void
}) => {
    if (!isOpen) return null

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContent}>
                <div>
                    <div
                        onClick={onClose}
                        className="w-4 h-4  flex flex-row justify-center"
                    >
                        <Image alt="x" src={xUrl} width={12} height={12} />
                    </div>
                </div>

                <CustomSlider
                    max={100}
                    name={"price"}
                    handleChange={handleChange}
                />
            </div>
        </div>
    )
}
