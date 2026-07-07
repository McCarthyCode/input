import type { Meta, StoryObj } from "@storybook/react-vite";

import InputText from "./InputText";

const meta: Meta<typeof InputText> = {
  title: "Inputs/Text",
  component: InputText,
  args: {},
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Empty: Story = {
  args: { name: 'empty', },
};

export const Placeholder: Story = {
  args: { name: 'placeholder', placeholder: 'placeholder', },
};

export const Value: Story = {
  args: { name: 'placeholder', placeholder: 'placeholder', value: 'Input Text' },
};
