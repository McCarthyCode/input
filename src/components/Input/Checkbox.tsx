import { useState, type ChangeEventHandler } from "react"

import type { Input, InputProps } from "./Input"

interface CheckboxProps extends InputProps {
  label?: string
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function Checkbox({ id, name, label, checked, onChange }: CheckboxProps): Input {
  let [check, setCheck] = useState(checked)

  const checkBox: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCheck(e.currentTarget.checked)
  }

  return (
    <span className="flex leading-4">
      <input type="checkbox" id={id || name} name={name} checked={check} onChange={onChange ? onChange : checkBox} className="
        accent-emerald-700
        bg-neutral-secondary-medium
        border
        border-default-medium
        cursor-pointer
        drop-shadow
        h-4
        rounded
        w-4
      " />
      {label ? <label htmlFor={name} className="cursor-pointer ps-2">{label}</label> : ''}
    </span>
  )
}
