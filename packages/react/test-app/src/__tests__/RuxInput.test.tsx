import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { screen, within } from "testing-library__dom";

import RuxInputTest from "../pages/RuxInputTest";

describe("RuxInput", () => {
  test("Should change with fireEvent", async () => {
    const { getByTestId, findByDisplayValue } = render(<RuxInputTest />);
    const input = getByTestId("rux-input-test");

    fireEvent.change(input, { target: { value: "foo@bar.com" } });
    await findByDisplayValue("foo@bar.com");

    //* Uncomment to see a failing test
    // await findByDisplayValue("foo@.com");

    expect(input).toHaveValue("foo@bar.com");
  });
  test("Should accept input with fireEvent", async () => {
    const { getByTestId, findByDisplayValue } = render(<RuxInputTest />);
    const input = getByTestId("rux-input-test");

    fireEvent.input(input, { target: { value: "foo@input.com" } });
    await findByDisplayValue("foo@input.com");

    expect(input).toHaveValue("foo@input.com");
  });
  /**
   *  This simply finds the error text within the input.
   */
  test("Should render error-text", async () => {
    render(<RuxInputTest />);
    const input = screen.getByTestId("rux-input-test");
    let errorText = await within(input).findAllByText("Error text.");
    expect(errorText).not.toBeNull();
  });

  test("Can get a RuxInput by labelText", async () => {
    render(<RuxInputTest />);

    //* using screen from testing-library__dom allows the findByLabelText to get through the shadow DOM
    const input = await screen.findByLabelText("Rux Input");
    const getInput = screen.getByTestId("rux-input-test");

    //* This shows that it's possible to getByLabelText, but this approach requires you to already have the RuxInput found, so it's a bit redundant
    const shadowInput = within(getInput).getByLabelText("Rux Input");

    expect(input).not.toBeNull();
    expect(shadowInput).not.toBeNull();
  });

  test("Can test for ruxBlur being called", async () => {
    const { getByTestId, findByText } = render(<RuxInputTest />);
    const input1 = getByTestId("rux-input-test");
    const input2 = getByTestId("input-2");
    // async function findErrorText() {
    //   let res;
    //   await within(input2)
    //     .findAllByText("Enter cid")
    //     .then((resolved) => {
    //       res = resolved;
    //     });
    //   return res;
    // }
    let errorText = await within(input2).findByText("Enter cid");
    console.log(errorText.nodeValue);
    expect(errorText).not.toBeNull();
    fireEvent.change(input2, { target: { value: "Cid" } });
    //click off, blur should fire and error text should go away
    fireEvent.click(input1);
    let error2 = await within(input2).findByDisplayValue("Enter cid");
    console.log(error2);
    // expect(errorText).toBeNull();
  });
});
