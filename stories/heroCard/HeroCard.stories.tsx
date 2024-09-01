import { Meta, StoryObj } from "@storybook/react";
import HeroCard from "./HeroCard";

export default {
  title: "Components/HeroCard",
  component: HeroCard,
} as Meta;

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Example/HeroCard",
  component: HeroCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroCard>;

export const Default: Story = {
  args: {
    imageSrc: "https://via.placeholder.com/190",
    title: "Título del HeroCard",
    url: "HeroCard url",
    favorite: true,
    onFavoriteToggle: () => {},
  },
};
