import type { ChangeEventHandler } from "react"

import type { Input, InputProps } from "./Input"

interface RadioProps extends InputProps {
  value: string
  label?: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Radio({ id, name, value, label, checked, onChange }: RadioProps): Input {
  return (
    <span className="flex leading-4">
      <input type="radio" id={id || `${name}-${value}`} name={name} value={value} checked={checked} onChange={onChange}
        className="
          accent-emerald-700
          border
          cursor-pointer
          drop-shadow
          h-4
          rounded
          w-4
        "
      />
      <label htmlFor={id || `${name}-${value}`} className="cursor-pointer ps-1">{label || 'Option'}</label>
    </span>
  )
}
