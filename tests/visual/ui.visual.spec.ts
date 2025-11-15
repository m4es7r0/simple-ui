import { test, expect } from "@playwright/test";

const stories = [
	"ui-button--default",
	"ui-alert--default",
	"ui-accordion--default",
	"ui-dialog--default",
	"ui-input--default",
	"ui-checkbox--default",
	"ui-switch--default",
	"ui-card--default",
	"ui-progress--default",
	"ui-meter--default",
	"ui-spinner--default",
	"ui-skeleton--default",
	"ui-separator--default",
	"ui-label--default",
	"ui-kbd--default",
	"ui-textarea--default",
	"ui-tabs--default",
	"ui-tooltip--default",
];

for (const id of stories) {
	test(`visual: ${id}`, async ({ page }) => {
		await page.goto(`/iframe.html?id=${id}`);
		await page.waitForTimeout(200);
		const root = page.locator("#storybook-root");
		await expect(root).toHaveScreenshot(`${id}.png`, {
			maxDiffPixelRatio: 0.02,
		});
	});
}


