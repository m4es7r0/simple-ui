import type { Meta, StoryObj } from "@storybook/react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

const meta = {
	title: "UI/Kbd",
	component: Kbd,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "A component for displaying keyboard keys and shortcuts." },
		},
	},
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<KbdGroup>
			<Kbd>⌘</Kbd>
			<Kbd>K</Kbd>
		</KbdGroup>
	),
};


