import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs";

const meta = {
	title: "UI/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: { component: "A navigation component for switching between different views or content panels." },
		},
	},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="one">
			<TabsList>
				<TabsTab value="one">One</TabsTab>
				<TabsTab value="two">Two</TabsTab>
				<TabsTab value="three">Three</TabsTab>
			</TabsList>
			<TabsPanel value="one">Tab one content</TabsPanel>
			<TabsPanel value="two">Tab two content</TabsPanel>
			<TabsPanel value="three">Tab three content</TabsPanel>
		</Tabs>
	),
};


