import React from "react"
import styles from "./SelectBox.module.css"
export const SelectBox = ({
    name,
    value,
    handleChange,
    text,
}: {
    name: string
    value: boolean
    handleChange: ({ name, value }: { name: string; value: boolean }) => void
    text: string
}) => {
    console.log(value)
    const onClickHandler = () => {
        handleChange({ name, value: !value })
    }
    let bgc
    if (value) {
        bgc = { backgroundColor: "#F2A945" }
    }
    return (
        <div className={styles.box} style={bgc} onClick={onClickHandler}>
            {text}123123
        </div>
    )
}
