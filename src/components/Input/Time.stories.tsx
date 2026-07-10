import type { Meta, StoryObj } from "@storybook/react-vite"

import Time from "./Time"

const meta: Meta<typeof Time> = {
  title: "Inputs/Time",
  component: Time,
  args: {},
}

export default meta

type Story = StoryObj<typeof Time>

export const Empty: Story = {
  args: { name: 'time' },
}

export const Value: Story = {
  args: { name: 'time', value: '13:30' },
}
