interface DatetimeLocalProps {
  id?: string
  name: string
  value?: string
}

export default function DatetimeLocal({ id, name, value }: DatetimeLocalProps) {
  return (
    <input type="datetime-local" id={id || name} name={name} value={value} className="
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
