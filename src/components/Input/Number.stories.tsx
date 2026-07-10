import type { Meta, StoryObj } from "@storybook/react-vite"

import Number from "./Number"

const meta: Meta<typeof Number> = {
  title: "Inputs/Number",
  component: Number,
  args: {},
}

export default meta

type Story = StoryObj<typeof Number>

export const Empty: Story = {
  args: { name: 'empty' },
}

export const Placeholder: Story = {
  args: { name: 'placeholder', placeholder: 'Number Input' },
}

export const Value: Story = {
  args: { name: 'value', placeholder: 'Number Input', value: '42' },
}
