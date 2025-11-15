import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs";

describe("Tabs", () => {
  it("renders triggers", () => {
    render(
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTab value="one">One</TabsTab>
          <TabsTab value="two">Two</TabsTab>
        </TabsList>
        <TabsPanel value="one">One</TabsPanel>
        <TabsPanel value="two">Two</TabsPanel>
      </Tabs>
    );
    expect(screen.getByText("One")).toBeDefined();
    expect(screen.getByText("Two")).toBeDefined();
  });
});
