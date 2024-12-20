"use client"

import Image from "next/image"
import { useState } from "react"
import { Modal } from "../modal/Modal"
export default function Navbar({
    handleChange,
}: {
    handleChange: (args: { name: string; value: number | number[] }) => void
}) {
    const [isModalOpen, setIsModelOpen] = useState(false)

    const handleClick = () => {
        setIsModelOpen((state) => !state)
    }
    const onClose = () => {
        setIsModelOpen((state) => false)
    }
    console.log(isModalOpen)
    return (
        <div className="flex flex-row h-20 bg-white items-center px-6 pr-6">
            <div className="w-6 h6" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>

            <div className="ml-auto mr-auto ">
                <Image
                    src="/_assets/icon.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                />
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={onClose}
                handleChange={handleChange}
            />
        </div>
    )
}
