import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";

describe("Accordion", () => {
  it("renders items", () => {
    render(
      <Accordion value={["a"]}>
        <AccordionItem value="a">
          <AccordionTrigger>Section</AccordionTrigger>
          <AccordionPanel>Content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByText("Section")).toBeDefined();
  });
});
