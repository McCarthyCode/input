import type { Meta, StoryObj } from "@storybook/react-vite"

import DatetimeLocal from "./DatetimeLocal"

const meta: Meta<typeof DatetimeLocal> = {
  title: "Inputs/DatetimeLocal",
  component: DatetimeLocal,
  args: {},
}

export default meta

type Story = StoryObj<typeof DatetimeLocal>

export const Empty: Story = {
  args: { name: 'datetime-local' },
}

export const Value: Story = {
  args: { name: 'datetime-local', value: '2026-07-10T13:32' },
}
