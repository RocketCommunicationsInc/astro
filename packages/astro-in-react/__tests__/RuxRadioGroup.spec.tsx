/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxRadioGroup } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxRadioGroup", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxRadioGroup></RuxRadioGroup>);
    const comp = container.getElementsByTagName("rux-radio-group")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxRadioGroup } =
      includeWebComponent<HTMLRuxRadioGroupElement>(
        renderWithStrictMode(
          <RuxRadioGroup helpText="Props as a string!"></RuxRadioGroup>
        )
      );
    expect(ruxRadioGroup.helpText).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxRadioGroup } =
      includeWebComponent<HTMLRuxRadioGroupElement>(
        renderWithStrictMode(<RuxRadioGroup invalid={true}></RuxRadioGroup>)
      );
    expect(ruxRadioGroup.invalid).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const radioRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxRadioGroup } =
      includeWebComponent<HTMLRuxRadioGroupElement>(
        renderWithStrictMode(<RuxRadioGroup ref={radioRef}></RuxRadioGroup>)
      );
    expect(radioRef.current).toEqual(ruxRadioGroup);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxRadioGroupElement>(
      renderWithStrictMode(
        <RuxRadioGroup onClick={FakeOnClick}></RuxRadioGroup>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });

  test("should add custom events", () => {
    const radioRef: React.RefObject<HTMLRuxRadioGroupElement> =
      React.createRef();
    const FakeChange = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxRadioGroupElement>(
      renderWithStrictMode(
        <RuxRadioGroup ref={radioRef} onRux-change={FakeChange}></RuxRadioGroup>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-change");
  });
});
