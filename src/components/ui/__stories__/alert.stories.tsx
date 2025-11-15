import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const meta = {
	title: "UI/Alert",
	component: Alert,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "A callout for displaying important information.",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "info", "success", "warning", "error"],
		},
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>Something interesting happened.</AlertDescription>
				<AlertAction>
					<Button size="sm" variant="outline">Action</Button>
				</AlertAction>
			</>
		),
	},
};


