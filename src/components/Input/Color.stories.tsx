import type { Meta, StoryObj } from "@storybook/react-vite"

import Color from "./Color"

const meta: Meta<typeof Color> = {
  title: "Inputs/Color",
  component: Color,
  args: {},
}

export default meta

type Story = StoryObj<typeof Color>

export const Red: Story = {
  args: { name: 'color', value: '#ff0000' },
}

export const Green: Story = {
  args: { name: 'color', value: '#00ff00' },
}

export const Blue: Story = {
  args: { name: 'color', value: '#0000ff' },
}

export const Black: Story = {
  args: { name: 'color', value: '#000000' },
}

export const White: Story = {
  args: { name: 'color', value: '#ffffff' },
}
