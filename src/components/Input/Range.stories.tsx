import type { Meta, StoryObj } from "@storybook/react-vite"

import Range from "./Range"

const meta: Meta<typeof Range> = {
  title: "Inputs/Range",
  component: Range,
  args: {},
}

export default meta

type Story = StoryObj<typeof Range>

export const Default: Story = {
  args: { name: 'range' },
}

export const Bounded: Story = {
  args: { name: 'range', min: 0, max: 10, step: 1, value: 5 },
}
