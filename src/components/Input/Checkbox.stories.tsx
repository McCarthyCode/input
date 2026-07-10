import Checkbox from "./Checkbox"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  args: {},
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Labeled: Story = {
  args: { name: 'checkbox1', label: 'Labeled Checkbox', checked: true },
}

export const Unlabeled: Story = {
  args: { name: 'checkbox2' },
}
