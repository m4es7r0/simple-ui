import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Checkbox } from "@/components/ui/checkbox";

describe("Checkbox", () => {
	it("renders without crashing", () => {
		render(<Checkbox />);
	});
});


