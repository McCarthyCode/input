import type { Meta, StoryObj } from "@storybook/react-vite"

import Url from "./Url"

const meta: Meta<typeof Url> = {
  title: "Inputs/Url",
  component: Url,
  args: {},
}

export default meta

type Story = StoryObj<typeof Url>

export const Empty: Story = {
  args: { name: 'empty' },
}

export const Placeholder: Story = {
  args: { name: 'placeholder', placeholder: 'Web Address' },
}

export const Value: Story = {
  args: { name: 'value', placeholder: 'Web Address', value: 'https://example.com' },
}
