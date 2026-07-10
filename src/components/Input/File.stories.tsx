import type { Meta, StoryObj } from "@storybook/react-vite"

import File from "./File"

const meta: Meta<typeof File> = {
  title: "Inputs/File",
  component: File,
  args: {},
}

export default meta

type Story = StoryObj<typeof File>

export const Empty: Story = {
  args: { name: 'empty' },
}

export const Accept: Story = {
  args: { name: 'accept', accept: 'image/*' },
}

export const Multiple: Story = {
  args: { name: 'multiple', multiple: true },
}
