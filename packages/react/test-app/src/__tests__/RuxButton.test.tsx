import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import { screen, within } from "testing-library__dom";
import RuxButtonTest from "../pages/RuxButtonTest";

describe("RuxButton", () => {
  test("Hears a fireEvent click", async () => {
    const { getByTestId, findByDisplayValue } = render(<RuxButtonTest />);
    const btn = getByTestId("rux-btn");

    fireEvent.click(btn);
    //* Using a textarea to render the "Clicked!" message, since findByDispalyValue has strict element parameters: https://testing-library.com/docs/queries/bydisplayvalue
    await findByDisplayValue("Clicked!");
  });
  //! Currently failing. Unable to click the button after changing disabled=false, since disabled is still present the stencil component thinks it's disabled still.
  test("Should be able to toggle disabled state", async () => {
    const { getByTestId, findByDisplayValue } = render(<RuxButtonTest />);
    const btn = getByTestId("rux-btn");
    const btn2 = getByTestId("rux-btn-2");
    expect(btn2).toHaveAttribute("disabled", true);
    //Clicking the first btn should make the second have disabled=false
    fireEvent.click(btn);
    expect(btn2).toHaveAttribute("disabled", false);
    //Should be able to click it now and have the textarea appear
    fireEvent.click(btn2);
    await findByDisplayValue("Second Click!");
  });
});
