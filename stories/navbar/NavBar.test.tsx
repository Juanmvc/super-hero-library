import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly with provided props", () => {
    const props = {
      logoSrc: "https://example.com/logo.jpg",
      logoUrl: "/home",
      iconUrl: "/favorites",
    };

    render(<Navbar {...props} />);

    const brandImageElement = screen.getByAltText("Imagen marca");
    expect(brandImageElement).toBeInTheDocument();

    const iconImageElement = screen.getByAltText("Imagen heart");
    expect(iconImageElement).toBeInTheDocument();
  });
});
