/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxInputField } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxInputField", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxInputField></RuxInputField>);
    const comp = container.getElementsByTagName("rux-input-field")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxInputField } =
      includeWebComponent<HTMLRuxInputFieldElement>(
        renderWithStrictMode(
          <RuxInputField helpText="Props as a string!">
            Large Button
          </RuxInputField>
        )
      );
    expect(ruxInputField.helpText).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxInputField } =
      includeWebComponent<HTMLRuxInputFieldElement>(
        renderWithStrictMode(
          <RuxInputField disabled={true}>Disabled Button</RuxInputField>
        )
      );
    expect(ruxInputField.disabled).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const inputRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxInputField } =
      includeWebComponent<HTMLRuxInputFieldElement>(
        renderWithStrictMode(
          <RuxInputField ref={inputRef}>Button Ref</RuxInputField>
        )
      );
    expect(inputRef.current).toEqual(ruxInputField);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxInputFieldElement>(
      renderWithStrictMode(
        <RuxInputField onClick={FakeOnClick}></RuxInputField>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });

  test("should add custom events", () => {
    const inputRef: React.RefObject<HTMLRuxInputFieldElement> =
      React.createRef();
    const FakeBlur = jest.fn();
    const FakeInput = jest.fn();
    const FakeChange = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxInputFieldElement>(
      renderWithStrictMode(
        <RuxInputField
          ref={inputRef}
          onRux-blur={FakeBlur}
          onRux-change={FakeChange}
          onRux-input={FakeInput}
        ></RuxInputField>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain(
      "rux-blur",
      "rux-change",
      "rux-input"
    );
  });
});
