import type { Meta, StoryObj } from "@storybook/react-vite"

import Password from "./Password"

const meta: Meta<typeof Password> = {
  title: "Inputs/Password",
  component: Password,
  args: {},
}

export default meta

type Story = StoryObj<typeof Password>

export const Empty: Story = {
  args: { name: 'empty' },
}

export const Placeholder: Story = {
  args: { name: 'placeholder', placeholder: 'Password Input' },
}
