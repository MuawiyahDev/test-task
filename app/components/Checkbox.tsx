import {  MutableRefObject, useEffect, useRef } from "react";
import { InputProps } from "./Input";
import { Label } from "./Label";
import { twMerge } from "tailwind-merge";

export const Checkbox = ({ children, id, innerRef, required, className, ...props }: InputProps & { innerRef?: MutableRefObject<HTMLInputElement | null> }) => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (innerRef) {
            innerRef.current = ref.current
        }
    }, [ref])

    return (
        <div className={twMerge("flex items-start flex-nowrap gap-2", className)}>
            <input {...props} id={id} ref={ref} type="checkbox" className="peer size-0 overflow-hidden w-0 max-w-0 -ml-2" />
            <div role={'checkbox'}  onClick={() => ref.current?.click()} className="size-5 shrink-0 sm:size-5 after:absolute after:inset-0.5 peer-checked:after:bg-white relative cursor-pointer outline-none  ring-offset-zinc-950 border peer peer-focus:border-white peer-checked:border-white border-white/10 "></div>
            <Label htmlFor={id} className=" text-zinc-400 min-h-5  align-middle flex items-center text-sm">
                {children}
            </Label>
        </div>
    )
}
