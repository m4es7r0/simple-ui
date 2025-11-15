import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Progress } from "@/components/ui/progress";

describe("Progress", () => {
	it("renders without crashing", () => {
		render(<Progress value={50} max={100} />);
	});
});


