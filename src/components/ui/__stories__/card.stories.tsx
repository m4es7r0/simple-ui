import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardPanel, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta = {
	title: "UI/Card",
	component: Card,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "A content container for grouping related information.",
			},
		},
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Card className="w-96">
			<CardHeader>
				<CardTitle>Card title</CardTitle>
				<CardDescription>Card description</CardDescription>
			</CardHeader>
			<CardPanel>
				<p>Some body content.</p>
			</CardPanel>
			<CardFooter>
				<Button size="sm">Action</Button>
			</CardFooter>
		</Card>
	),
};


