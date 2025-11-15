import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Skeleton } from "@/components/ui/skeleton";

describe("Skeleton", () => {
	it("renders without crashing", () => {
		render(<Skeleton className="h-4 w-20" />);
	});
});


