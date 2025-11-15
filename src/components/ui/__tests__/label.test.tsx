import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "@/components/ui/label";

describe("Label", () => {
  it("renders text", () => {
    render(<Label>Text</Label>);
    expect(screen.getByText("Text")).toBeDefined();
  });
});
