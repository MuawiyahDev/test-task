# Task

create a button component that can be used in a form. The button should have the following features:

- for the className of the button, use twMerge from the `tailwind-merge`
- keep the structure of the button as a `button` element and with the style (export const Button = forwardRef...)
- it does need to accept "className" and "...props", with the "ref" being forwarded to the button element
  - it means that it is <HTMLButtonElement, ButtonProps> object
- define type ButtonProps, so it can be used for the button
- define ButtonAttr type, so it can be used for the ButtonProps
- add the following props to the ButtonProps:
  - justify-between
  - make its font font-semibold
  - items cenetered
  - flex
  - use hover:xxx classes
  - before:xxx classes
  - select-none
  - any that you can think of, that may define a button, as on the screenshot example
