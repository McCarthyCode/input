import type { Meta, StoryObj } from "@storybook/react-vite"

import Date from "./Date"

const meta: Meta<typeof Date> = {
  title: "Inputs/Date",
  component: Date,
  args: {},
}

export default meta

type Story = StoryObj<typeof Date>

export const Empty: Story = {
  args: { name: 'date' },
}

export const Value: Story = {
  args: { name: 'date', value: '2026-07-10' },
}
