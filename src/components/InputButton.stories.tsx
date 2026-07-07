import type { Meta, StoryObj } from "@storybook/react-vite";

import InputButton from "./InputButton";

const meta: Meta<typeof InputButton> = {
  title: "Inputs/Button",
  component: InputButton,
  args: {},
};

export default meta;

type Story = StoryObj<typeof InputButton>;

export const Styled: Story = {
  args: { name: 'button', value: 'Styled Button' },
};
