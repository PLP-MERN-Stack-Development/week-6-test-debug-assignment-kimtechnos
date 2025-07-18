import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";

// Mock fetch or axios as needed
jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({ data: [{ id: 1, title: "Test Post" }] })
  ),
}));

// Example integration test
it("renders posts from API", async () => {
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Test Post")).toBeInTheDocument()
  );
});
