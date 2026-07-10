import type { Meta, StoryObj } from "@storybook/react-vite"

import Submit from "./Submit"

const meta: Meta<typeof Submit> = {
  title: "Inputs/Submit",
  component: Submit,
  args: {},
}

export default meta

type Story = StoryObj<typeof Submit>

export const Styled: Story = {
  args: { name: 'submit', value: 'Submit' },
}
