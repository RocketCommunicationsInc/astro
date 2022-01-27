import { render, fireEvent, waitFor, act } from "@testing-library/react";
import { screen, within } from "testing-library__dom";
import userEvent from "@testing-library/user-event";

import RuxInputTest from "../pages/RuxInputTest";

describe("RuxInput", () => {
  /**
   * fireEvent Tests
   */
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
    //* Uncomment to see a failing test
    // await findByDisplayValue("foo@fail.com")

    expect(input).toHaveValue("foo@input.com");
  });

  /**
   *  userEvent test
   */
  test("Should be typed into with userEvent", async () => {
    render(<RuxInputTest />);
    let input = await screen.findByLabelText("Rux Input");
    act(() => {
      userEvent.type(input, "User Event");
    });
    await screen.findByDisplayValue("User Event");
    expect(input).toHaveValue("User Event");
  });

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
    const { getByTestId } = render(<RuxInputTest />);
    const input2 = getByTestId("input-2");

    let errorText: HTMLDivElement = await within(input2).findByText(
      "Enter cid"
    );

    const shadowInput: HTMLRuxInputElement = within(input2).getByLabelText(
      "Rux Input 2"
    );
    act(() => {
      userEvent.type(shadowInput, "Cid");
    });
    expect(shadowInput.value).toBe("Cid");

    // Trigger blur
    act(() => {
      shadowInput.blur();
    });
    // retries until the wrapped function stops throwing an error or times out
    await waitFor(() => {
      expect(errorText).not.toBeInTheDocument();
    });
  });
});
