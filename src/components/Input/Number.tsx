interface NumberProps {
  id?: string
  name: string
  placeholder?: string
  value?: string
}

export default function Number({ id, name, placeholder, value }: NumberProps) {
  return (
    <input type="number" id={id || name} name={name} placeholder={placeholder} value={value} className="
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
