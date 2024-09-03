import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import marvelLogo from "../../public/logos/marvel-logo.svg"

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Example/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export const Default: Story = {
  args: {
    logoSrc: marvelLogo,
    logoUrl: "https://www.google.com/",  
    iconUrl: "https://www.google.com/",
  },
};
