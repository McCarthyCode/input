import type { Meta, StoryObj } from "@storybook/react-vite"

import Email from "./Email"

const meta: Meta<typeof Email> = {
  title: "Inputs/Email",
  component: Email,
  args: {},
}

export default meta

type Story = StoryObj<typeof Email>

export const Empty: Story = {
  args: { name: 'empty' },
}

export const Placeholder: Story = {
  args: { name: 'placeholder', placeholder: 'Email Address' },
}

export const Value: Story = {
  args: { name: 'placeholder', placeholder: 'Email Address', value: 'user@example.com' },
}
