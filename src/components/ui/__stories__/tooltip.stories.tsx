import type { Meta, StoryObj } from "@storybook/react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
} from "@/components/ui/tooltip";
import { Button, buttonVariants } from "@/components/ui/button";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A small overlay that provides contextual information on hover or focus.",
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              className={buttonVariants({ variant: "outline" })}
              role="button"
              tabIndex={0}
            >
              Hover me
            </Button>
          }
        />

        <TooltipPopup>Tooltip content</TooltipPopup>
      </Tooltip>
    </TooltipProvider>
  ),
};
