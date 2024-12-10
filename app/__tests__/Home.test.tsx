import { render, screen } from "@testing-library/react";
import Home from "../page";
import '@testing-library/jest-dom';

describe("Home", () => {
  it("renders the heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: /Willkommen zu meinem Webentwicklungsportfolio!/i });
    expect(heading).toBeInTheDocument();
  });
});
