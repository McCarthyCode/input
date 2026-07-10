import type { Meta, StoryObj } from "@storybook/react-vite"

import Week from "./Week"

const meta: Meta<typeof Week> = {
  title: "Inputs/Week",
  component: Week,
  args: {},
}

export default meta

type Story = StoryObj<typeof Week>

export const Empty: Story = {
  args: { name: 'week' },
}

export const Value: Story = {
  args: { name: 'week', value: '2026-W28' },
}
