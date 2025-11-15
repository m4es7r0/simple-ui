import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label";

const meta = {
	title: "UI/Label",
	component: Label,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "Renders an accessible label associated with controls." },
		},
	},
	args: { children: "Label" },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};


