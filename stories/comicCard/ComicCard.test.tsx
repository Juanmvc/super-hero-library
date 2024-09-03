import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import ComicCard from "./ComicCard";

describe("ComicCard Component", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders correctly with provided props", () => {
    const props = {
      imageSrc: "https://example.com/image.jpg",
      title: "Test Hero Title",
    };

    const { getByAltText, getByText } = render(<ComicCard {...props} />);

    const imageElement = getByAltText("Imagen");
    expect(imageElement).toHaveAttribute("src", props.imageSrc);

    expect(getByText(props.title)).toBeInTheDocument();
  });
});
