import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Meter } from "@/components/ui/meter";

describe("Meter", () => {
	it("renders without crashing", () => {
		render(<Meter value={0.5} min={0} max={1} />);
	});
});


