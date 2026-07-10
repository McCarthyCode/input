import type { ChangeEventHandler } from "react"

interface RangeProps {
  id?: string
  name: string
  min?: number
  max?: number
  step?: number
  value?: number
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function Range({ id, name, min, max, step, value, onChange }: RangeProps) {
  return (
    <input type="range" id={id || name} name={name} min={min} max={max} step={step} value={value} onChange={onChange} className="
      accent-emerald-700
      bg-transparent
      range
      w-56
    " />
  )
}
