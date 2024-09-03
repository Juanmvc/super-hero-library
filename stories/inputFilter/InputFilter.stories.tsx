import { Meta, StoryObj } from "@storybook/react";
import InputFilter from "./InputFilter";

export default {
  title: "Components/InputFilter",
  component: InputFilter,
} as Meta;

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Example/InputFilter",
  component: InputFilter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputFilter>;

export const Default: Story = {
  args: {
    placeholder: "Character name",
    onChange: () => {},
  },
};
