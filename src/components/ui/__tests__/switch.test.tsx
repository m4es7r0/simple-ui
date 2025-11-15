import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Switch } from "@/components/ui/switch";

describe("Switch", () => {
	it("renders without crashing", () => {
		render(<Switch />);
	});
});


