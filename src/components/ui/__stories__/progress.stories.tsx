import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";

const meta = {
	title: "UI/Progress",
	component: Progress,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "A visual indicator showing the completion status of a task." },
		},
	},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { value: 42, max: 100 },
};


