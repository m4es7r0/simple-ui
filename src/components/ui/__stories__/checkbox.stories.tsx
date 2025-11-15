import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const meta = {
	title: "UI/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "A binary toggle input for selecting one or multiple options.",
			},
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<label className="inline-flex items-center gap-2">
			<Checkbox {...args} />
			<Label>Accept terms</Label>
		</label>
	),
};


