import type { Meta, StoryObj } from "@storybook/react-vite"

import FieldList from "./FieldList"
import Text from "./Input/Text"
import Button from "./Input/Button"

const meta: Meta<typeof FieldList> = {
  title: "FieldList",
  component: FieldList,
  args: {},
}

export default meta

type Story = StoryObj<typeof FieldList>

export const Default: Story = {
  args: {
    fields: [
      {
        key: "text",
        type: "text",
        children: [<Text key="text" name="text" placeholder="Text Input" />],
      },
      {
        key: "button",
        type: "button",
        labelClassName: "h-8 sm:text-end text-emerald text-nowrap",
        wrapperClassName: "sm:text-start",
        children: [<Button key="button" name="button" value="Styled Button" />],
      },
    ],
  },
}
