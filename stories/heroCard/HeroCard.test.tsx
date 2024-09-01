import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import HeroCard from "./HeroCard";

describe("HeroCard Component", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders correctly with provided props", () => {
    const props = {
      imageSrc: "https://example.com/image.jpg",
      title: "Test Hero",
      url: "/test-hero",
      favorite: true,
      onFavoriteToggle: () => {}    
    };

    const { getByAltText, getByText } = render(<HeroCard {...props} />);

    const imageElement = getByAltText("Imagen");
    expect(imageElement).toHaveAttribute("src", props.imageSrc);

    expect(getByText(props.title)).toBeInTheDocument();
  });
});
