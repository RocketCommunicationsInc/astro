/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxInput } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxInput", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxInput></RuxInput>);
    const comp = container.getElementsByTagName("rux-input")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxInput } = includeWebComponent<HTMLRuxInputElement>(
      renderWithStrictMode(
        <RuxInput helpText="Props as a string!">Large Button</RuxInput>
      )
    );
    expect(ruxInput.helpText).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxInput } = includeWebComponent<HTMLRuxInputElement>(
      renderWithStrictMode(<RuxInput disabled={true}>Disabled Button</RuxInput>)
    );
    expect(ruxInput.disabled).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const inputRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxInput } = includeWebComponent<HTMLRuxInputElement>(
      renderWithStrictMode(<RuxInput ref={inputRef}>Button Ref</RuxInput>)
    );
    expect(inputRef.current).toEqual(ruxInput);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxInputElement>(
      renderWithStrictMode(<RuxInput onClick={FakeOnClick}></RuxInput>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });

  test("should add custom events", () => {
    const inputRef: React.RefObject<HTMLRuxInputElement> = React.createRef();
    const FakeBlur = jest.fn();
    const FakeInput = jest.fn();
    const FakeChange = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxInputElement>(
      renderWithStrictMode(
        <RuxInput
          ref={inputRef}
          onRux-blur={FakeBlur}
          onRux-change={FakeChange}
          onRux-input={FakeInput}
        ></RuxInput>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-blur");
    expect(Object.keys(attatchedEvents)).toContain("rux-change");
    expect(Object.keys(attatchedEvents)).toContain("rux-input");
  });
});
