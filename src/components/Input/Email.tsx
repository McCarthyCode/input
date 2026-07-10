interface EmailProps {
  id?: string
  name: string
  placeholder?: string
  value?: string
}

export default function Email({ id, name, placeholder, value }: EmailProps) {
  return (
    <input type="email" id={id || name} name={name} placeholder={placeholder} value={value} className="
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
