import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@/components/ui/skeleton";

const meta = {
	title: "UI/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "A placeholder for loading content." },
		},
	},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col gap-2 w-80">
			<Skeleton className="h-6 w-40" />
			<Skeleton className="h-4 w-56" />
			<Skeleton className="h-4 w-48" />
		</div>
	),
};


