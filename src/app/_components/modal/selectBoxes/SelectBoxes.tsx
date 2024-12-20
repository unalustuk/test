import React from "react"
import { SelectBox } from "../../inputs/SelectBox"

export const SelectBoxes = ({
    handleChange,
    values,
    names,
}: {
    handleChange: ({ name, value }: { name: string; value: boolean }) => void
    values: boolean
    names: { name: string; text: string }[]
}) => {
    return (
        <div className="flex flex-wrap">
            {names.map((name) => (
                <SelectBox
                    key={name.name}
                    name={name.name}
                    value={values[name.name]}
                    handleChange={handleChange}
                    text={name.text}
                />
            ))}
        </div>
    )
}
