import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ruxFireEvent } from "../RuxEvents";

import RuxModalTest from "../pages/RuxModalTest";

describe("RuxModal", () => {
  it("Should open when triggered", async () => {
    const { getByTestId } = render(<RuxModalTest />);
    const modal = getByTestId("modal");
    const btn = getByTestId("btn");

    //modal should be closed
    expect(modal).not.toHaveAttribute("open");
    //click btn to open modal
    fireEvent.click(btn);
    expect(modal).toHaveAttribute("open");
  });
  it("Should emit ruxmodalclosed, setting open to false", async () => {
    const { getByTestId } = render(<RuxModalTest />);
    const modal = getByTestId("modal");
    const btn = getByTestId("btn");

    fireEvent.click(btn);
    expect(modal).toHaveAttribute("open");
    ruxFireEvent.ruxmodalclosed(modal);
    expect(modal).not.toHaveAttribute("open");
  });
});
