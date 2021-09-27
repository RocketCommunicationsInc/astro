/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxCheckbox } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxCheckbox", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxCheckbox></RuxCheckbox>);
    const comp = container.getElementsByTagName("rux-checkbox")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxCheckbox } =
      includeWebComponent<HTMLRuxCheckboxElement>(
        renderWithStrictMode(
          <RuxCheckbox helpText="Props as a string!"></RuxCheckbox>
        )
      );
    expect(ruxCheckbox.helpText).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxCheckbox } =
      includeWebComponent<HTMLRuxCheckboxElement>(
        renderWithStrictMode(<RuxCheckbox disabled={true}></RuxCheckbox>)
      );
    expect(ruxCheckbox.disabled).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const checkboxRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxCheckbox } =
      includeWebComponent<HTMLRuxCheckboxElement>(
        renderWithStrictMode(<RuxCheckbox ref={checkboxRef}></RuxCheckbox>)
      );
    expect(checkboxRef.current).toEqual(ruxCheckbox);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxCheckboxElement>(
      renderWithStrictMode(<RuxCheckbox onClick={FakeOnClick}></RuxCheckbox>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });

  test("should add custom events", () => {
    const checkboxRef: React.RefObject<HTMLRuxCheckboxElement> =
      React.createRef();
    const FakeBlur = jest.fn();
    const FakeInput = jest.fn();
    const FakeChange = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxCheckboxElement>(
      renderWithStrictMode(
        <RuxCheckbox
          ref={checkboxRef}
          onRux-blur={FakeBlur}
          onRux-change={FakeChange}
          onRux-input={FakeInput}
        ></RuxCheckbox>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-blur");
    expect(Object.keys(attatchedEvents)).toContain("rux-change");
    expect(Object.keys(attatchedEvents)).toContain("rux-input");
  });
});
