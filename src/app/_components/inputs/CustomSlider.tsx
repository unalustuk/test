import * as React from "react"
import { Slider as BaseSlider, SliderProps } from "@mui/base/Slider"
import clsx from "clsx"

export default function CustomSlider({
    handleChange,
    name,
    max,
    value,
}: {
    handleChange: (args: { name: string; value: number | number[] }) => void
    name: string
    max: number
    value: any
}) {
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        handleChange({ name, value: newValue })
    }
    return (
        <div>
            <Slider
                min={1}
                name={name}
                defaultValue={1}
                value={value}
                onChange={handleSliderChange}
                max={max}
            />
        </div>
    )
}

const resolveSlotProps = (fn: any, args: any) =>
    typeof fn === "function" ? fn(args) : fn

const Slider = React.forwardRef<HTMLSpanElement, SliderProps>((props, ref) => {
    return (
        <BaseSlider
            ref={ref}
            {...props}
            slotProps={{
                ...props.slotProps,
                root: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.root,
                        ownerState
                    )
                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `h-1.5 w-full py-4 inline-flex items-center relative touch-none ${
                                ownerState.disabled
                                    ? "opacity-50 cursor-default pointer-events-none text-slate-300 dark:text-slate-600"
                                    : "hover:opacity-100 cursor-pointer text-primary600 dark:text-primary500"
                            }`,
                            resolvedSlotProps?.className
                        ),
                    }
                },
                rail: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.rail,
                        ownerState
                    )
                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            "block absolute w-full h-[4px] rounded-full bg-current opacity-40",
                            resolvedSlotProps?.className
                        ),
                    }
                },
                track: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.track,
                        ownerState
                    )

                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            "block absolute h-[4px] rounded-full bg-primary400",
                            resolvedSlotProps?.className
                        ),
                    }
                },
                thumb: (ownerState, { active, focused }) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.thumb,
                        ownerState
                    )
                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `absolute w-[20px] h-[20px] -ml-1.5 box-border rounded-full outline-0 bg-current hover:shadow-outline-purple transition ${
                                focused || active
                                    ? "shadow-[0_0_0_8px_rgba(242,169,69,0.5)] dark:shadow-[0_0_0_4px_rgba(242,169,69,0.5)] active:shadow-[0_0_0_4px_rgba(242,169,69,0.5)] dark:active:shadow-[0_0_0_4px_rgba(242,169,69,0.5)] scale-[1.2] outline-none"
                                    : ""
                            }`,
                            resolvedSlotProps?.className
                        ),
                    }
                },
            }}
        />
    )
})
