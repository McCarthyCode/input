import type { Meta, StoryObj } from "@storybook/react-vite"

import Text from "./Text"

const meta: Meta<typeof Text> = {
  title: "Inputs/Text",
  component: Text,
  args: {},
}

export default meta

type Story = StoryObj<typeof Text>

export const Empty: Story = {
  args: { name: 'empty', },
}

export const Placeholder: Story = {
  args: { name: 'placeholder', placeholder: 'placeholder', },
}

export const Value: Story = {
  args: { name: 'placeholder', placeholder: 'placeholder', value: 'Input Text' },
}
