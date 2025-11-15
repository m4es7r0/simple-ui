import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";

const meta = {
	title: "UI/Badge",
	component: Badge,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "A small status indicator or label component." },
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "destructive", "outline", "secondary", "info", "success", "warning", "error"],
		},
		size: { control: "select", options: ["default", "sm", "lg"] },
	},
	args: { children: "Badge" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};


