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
      count: 5
    };

    render(<Navbar {...props} />);

    const brandImageElement = screen.getByAltText("Imagen marca");
    expect(brandImageElement).toBeInTheDocument();

    const iconImageElement = screen.getByAltText("Imagen heart");
    expect(iconImageElement).toBeInTheDocument();

    const countText = screen.getByText(/5/);
    expect(countText).toBeInTheDocument();
  });

  it("no muestra el ícono de favoritos cuando no se proporcionan iconUrl o el count", () => {
    const props = {
      logoSrc: "https://example.com/logo.jpg",
      logoUrl: "/home"
    };

    render(<Navbar {...props} />);

    const favoriteIcon = screen.queryByText("Imagen heart");
    expect(favoriteIcon).not.toBeInTheDocument();

    const countText = screen.queryByText(/5/);
    expect(countText).not.toBeInTheDocument();
  });
});
