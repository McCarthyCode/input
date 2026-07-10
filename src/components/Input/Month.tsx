interface MonthProps {
  id?: string
  name: string
  value?: string
}

export default function Month({ id, name, value }: MonthProps) {
  return (
    <input type="month" id={id || name} name={name} value={value} className="
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
