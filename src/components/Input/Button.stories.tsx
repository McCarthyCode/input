import type { Meta, StoryObj } from "@storybook/react-vite"

import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  args: {},
}

export default meta

type Story = StoryObj<typeof Button>

export const Styled: Story = {
  args: { name: 'button', value: 'Styled Button' },
}
