import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import Radio from "./Radio"

const meta: Meta<typeof Radio> = {
  title: "Inputs/Radio",
  component: Radio,
  args: {},
}

export default meta

type Story = StoryObj<typeof Radio>

export const Checked: Story = {
  args: { name: 'radio', value: 'radio1', label: 'Option', checked: true, onChange: () => {} },
}

export const Unchecked: Story = {
  args: { name: 'radio', value: 'radio2', label: 'Radio', checked: false, onChange: () => {} },
}

export const Group: Story = {
  render: () => {
    const [radio, setRadio] = useState('radio1')

    return (
      <div className="flex justify-between w-56">
        <Radio name="radio" value="radio1" label="Option" checked={radio === 'radio1'} onChange={(e) => setRadio(e.currentTarget.value)} />
        <Radio name="radio" value="radio2" label="Radio" checked={radio === 'radio2'} onChange={(e) => setRadio(e.currentTarget.value)} />
        <Radio name="radio" value="radio3" label="Option" checked={radio === 'radio3'} onChange={(e) => setRadio(e.currentTarget.value)} />
      </div>
    )
  },
}
