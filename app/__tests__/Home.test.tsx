import { render, screen } from "@testing-library/react";
import Home from "../page";
import '@testing-library/jest-dom';

describe("Home", () => {
  it("renders the heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: "Willkommen zu meinem Webentwicklungs­portfolio!" });
    expect(heading).toBeInTheDocument();
  });

  it("renders the CTA component by Test-ID", () => {
    render(<Home />);
    const headerElement = screen.getByTestId("cta"); 
    expect(headerElement).toBeInTheDocument();
  });
});
