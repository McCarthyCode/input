import type { Meta, StoryObj } from "@storybook/react-vite"

import Form from "./Form"
import Text from "./Input/Text"
import Email from "./Input/Email"
import Reset from "./Input/Reset"
import Submit from "./Input/Submit"

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
  args: {},
}

export default meta

type Story = StoryObj<typeof Form>

export const Default: Story = {
  args: {
    children: (
      <>
        <Text name="name" placeholder="Name" />
        <Email name="email" placeholder="Email Address" />
        <Reset name="reset" value="Clear Form" />
        <Submit name="submit" value="Submit" />
      </>
    ),
  },
}
