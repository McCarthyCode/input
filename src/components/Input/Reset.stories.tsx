import type { Meta, StoryObj } from "@storybook/react-vite"

import Reset from "./Reset"

const meta: Meta<typeof Reset> = {
  title: "Inputs/Reset",
  component: Reset,
  args: {},
}

export default meta

type Story = StoryObj<typeof Reset>

export const Styled: Story = {
  args: { name: 'reset', value: 'Clear Input Form' },
}
