import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={twMerge(
          "flex items-center justify-between select-none uppercase font-semibold text-base text-[#A1A1AA] border border-current h-11 px-5 w-full transition hover:bg-[#A1A1AA] hover:text-black disabled:opacity-80 font-jb-mono",
          className
        )}
      >
        {children}
      </button>
    );
  }
);
