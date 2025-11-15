import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const meta = {
	title: "UI/Switch",
	component: Switch,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "A toggle control for binary on/off states.",
			},
		},
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<label className="inline-flex items-center gap-2">
			<Switch {...args} />
			<Label>Enable feature</Label>
		</label>
	),
};


