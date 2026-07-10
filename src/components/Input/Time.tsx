interface TimeProps {
  id?: string
  name: string
  value?: string
}

export default function Time({ id, name, value }: TimeProps) {
  return (
    <input type="time" id={id || name} name={name} value={value} className="
      bg-white
      border
      border-gray-400
      h-8
      indent-2
      placeholder-gray-400
      rounded
      shadow-lg
      text-black
      w-56
    " />
  )
}
