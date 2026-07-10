import type { Meta, StoryObj } from "@storybook/react-vite"

import Month from "./Month"

const meta: Meta<typeof Month> = {
  title: "Inputs/Month",
  component: Month,
  args: {},
}

export default meta

type Story = StoryObj<typeof Month>

export const Empty: Story = {
  args: { name: 'month' },
}

export const Value: Story = {
  args: { name: 'month', value: '2026-07' },
}
