import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@/components/ui/spinner";

const meta = {
	title: "UI/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "An indicator that can be used to show a loading state." },
		},
	},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};


