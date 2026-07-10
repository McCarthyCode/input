import { Fragment } from "react"

import type { Input } from "./Input/Input"

export interface Field {
  key: string
  type: string
  labelClassName?: string
  wrapperClassName?: string
  children: Input[]
}

interface FieldListProps {
  fields: Field[]
}

const DEFAULT_LABEL_CLASSNAME = "sm:text-end text-emerald text-nowrap"
const DEFAULT_WRAPPER_CLASSNAME = "sm:text-start"
const GROUP_CLASSNAME = "flex justify-between w-56"

export default function FieldList({ fields }: FieldListProps) {
  return (
    <div className="
      gap-4
      grid
      grid-cols-1
      leading-8
      sm:grid-cols-2
      text-center
      w-full
    ">
      {fields.map(({ key, type, labelClassName, wrapperClassName, children }) => (
        <Fragment key={key}>
          <p className={labelClassName || DEFAULT_LABEL_CLASSNAME}>
            <code>{`<input type="${type}">`}</code>
          </p>
          <div className={wrapperClassName || DEFAULT_WRAPPER_CLASSNAME}>
            {children.length > 1 ? <div className={GROUP_CLASSNAME}>{children}</div> : children}
          </div>
        </Fragment>
      ))}
    </div>
  )
}
