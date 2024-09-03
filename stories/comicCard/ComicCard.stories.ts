import { Meta, StoryObj } from "@storybook/react";
import ComicCard from "./ComicCard";

export default {
  title: "Components/ComicCard",
  component: ComicCard,
} as Meta;

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Example/ComicCard",
  component: ComicCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ComicCard>;

export const Default: Story = {
  args: {
    imageSrc: "https://via.placeholder.com/190",
    title: "Título del Comic de los vengadores",
  },
};
