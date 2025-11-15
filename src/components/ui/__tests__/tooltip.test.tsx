import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

describe("Tooltip", () => {
  it("renders trigger", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger render={<Button>Trigger</Button>} />
          <TooltipPopup>Content</TooltipPopup>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByText("Trigger")).toBeDefined();
  });
});
