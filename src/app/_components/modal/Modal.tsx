import React from "react"
import styles from "./Modal.module.css"
import Image from "next/image"
import xUrl from "../../../../public/_assets/x-solid.svg?url"
export const Modal = ({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean
    onClose: () => void
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
            </div>
        </div>
    )
}
