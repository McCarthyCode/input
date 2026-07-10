import type { Meta, StoryObj } from "@storybook/react-vite"

import Search from "./Search"

const meta: Meta<typeof Search> = {
  title: "Inputs/Search",
  component: Search,
  args: {},
}

export default meta

type Story = StoryObj<typeof Search>

export const Empty: Story = {
  args: { name: 'empty' },
}

export const Placeholder: Story = {
  args: { name: 'placeholder', placeholder: 'Search' },
}
