import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A button or a component that looks like a button.",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "outline", "secondary", "destructive", "destructive-outline", "ghost", "link"],
		},
		size: {
			control: "select",
			options: ["default", "xs", "sm", "lg", "xl", "icon", "icon-xs", "icon-sm", "icon-lg", "icon-xl"],
		},
		disabled: { control: "boolean" },
	},
	args: {
		children: "Button",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => <Button {...args} />,
};


