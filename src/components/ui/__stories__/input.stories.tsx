import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
	title: "UI/Input",
	component: Input,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "A native input element.",
			},
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-80">
			<Label htmlFor="email">Email</Label>
			<Input id="email" placeholder="jane@doe.dev" {...args} />
		</div>
	),
};


