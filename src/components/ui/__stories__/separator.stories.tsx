import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/components/ui/separator";

const meta = {
	title: "UI/Separator",
	component: Separator,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "A visual divider for separating content sections." },
		},
	},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="w-96">
			<p>Above</p>
			<Separator className="my-2" />
			<p>Below</p>
		</div>
	),
};


