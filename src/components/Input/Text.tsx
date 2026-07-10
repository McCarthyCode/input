interface TextProps {
  name: string
  id?: string
  placeholder?: string
  value?: string
}

export default function Text({ id, name, placeholder, value }: TextProps) {
  return (
    <input id={id || name} name={name} placeholder={placeholder} type='text' value={value} className="
      bg-white
      border
      border-gray-400
      indent-2
      placeholder-gray-400
      rounded
      shadow-lg
      text-black
      w-56
    " />
  )
}
