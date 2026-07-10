interface WeekProps {
  id?: string
  name: string
  value?: string
}

export default function Week({ id, name, value }: WeekProps) {
  return (
    <input type="week" id={id || name} name={name} value={value} className="
      bg-white
      border
      border-gray-400
      h-8
      indent-2
      placeholder-gray-400
      rounded
      shadow-lg
      shrink
      text-black
      w-56
    " />
  )
}
