import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

describe("Kbd", () => {
  it("renders keys", () => {
    render(
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    );
    expect(screen.getByText("K")).toBeDefined();
  });
});
