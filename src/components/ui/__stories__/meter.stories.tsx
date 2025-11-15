import type { Meta, StoryObj } from "@storybook/react";
import { Meter } from "@/components/ui/meter";

const meta = {
	title: "UI/Meter",
	component: Meter,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "A visual representation of a value within a known range." },
		},
	},
} satisfies Meta<typeof Meter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { value: 0.6, min: 0, max: 1 },
};


