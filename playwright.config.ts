import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests/visual",
	use: {
		...devices["Desktop Chrome"],
		viewport: { width: 900, height: 600 },
	},
	webServer: {
		command: "npm run storybook -- --ci -p 6007",
		port: 6007,
		reuseExistingServer: true,
		timeout: 120000,
	},
	snapshotDir: "./tests/visual/__screenshots__",
});


