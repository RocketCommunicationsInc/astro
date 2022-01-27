import { render, fireEvent } from "@testing-library/react";
import { ruxFireEvent } from "../RuxEvents";

import RuxModalTest from "../pages/RuxModalTest";
//! Will need re-worked when slots modal is released
describe("RuxModal", () => {
  it("Should open when triggered", async () => {
    const { getByTestId } = render(<RuxModalTest />);
    const modal = getByTestId("modal");
    const btn = getByTestId("btn");

    expect(modal).not.toHaveAttribute("open");
    fireEvent.click(btn);
    expect(modal).toHaveAttribute("open");
  });
  it("Should emit ruxmodalclosed, setting open to false", async () => {
    const { getByTestId } = render(<RuxModalTest />);
    const modal = getByTestId("modal");
    const btn = getByTestId("btn");

    fireEvent.click(btn);
    expect(modal).toHaveAttribute("open");
    // Added custom event to fireEvent's object - see ../RuxEvents.tsx
    ruxFireEvent.ruxmodalclosed(modal);
    expect(modal).not.toHaveAttribute("open");
  });
});
