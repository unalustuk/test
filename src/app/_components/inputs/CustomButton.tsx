import React from "react"
import clsx from "clsx"

interface CustomButtonProps {
    onClick: () => void
    text: string
    disabled?: boolean
    className?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
    onClick,
    text,
    disabled = false,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                "px-4 py-2 rounded bg-primary600 text-white font-bold hover:bg-primary400                   ",
                className
            )}
        >
            {text}
        </button>
    )
}

export default CustomButton
