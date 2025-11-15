import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const meta = {
	title: "UI/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "A multi-line text input for longer content." },
		},
	},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-96">
			<Label htmlFor="message">Message</Label>
			<Textarea id="message" placeholder="Type your message..." {...args} />
		</div>
	),
};


