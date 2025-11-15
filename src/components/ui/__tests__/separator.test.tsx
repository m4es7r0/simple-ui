import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Separator } from "@/components/ui/separator";

describe("Separator", () => {
	it("renders without crashing", () => {
		render(<Separator />);
	});
});


