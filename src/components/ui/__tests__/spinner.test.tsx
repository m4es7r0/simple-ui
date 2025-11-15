import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Spinner } from "@/components/ui/spinner";

describe("Spinner", () => {
	it("renders without crashing", () => {
		render(<Spinner />);
	});
});


