/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxRadio } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxRadio", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxRadio>Radio</RuxRadio>);
    const comp = container.getElementsByTagName("rux-radio")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxRadio } = includeWebComponent<HTMLRuxRadioElement>(
      renderWithStrictMode(
        <RuxRadio label="Props as a string!">Label</RuxRadio>
      )
    );
    expect(ruxRadio.label).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxRadio } = includeWebComponent<HTMLRuxRadioElement>(
      renderWithStrictMode(<RuxRadio disabled={true}>Disabled</RuxRadio>)
    );
    expect(ruxRadio.disabled).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const radioRef: React.RefObject<HTMLRuxRadioElement> = React.createRef();
    const { webcomponent: ruxRadio } = includeWebComponent<HTMLRuxRadioElement>(
      renderWithStrictMode(<RuxRadio ref={radioRef}></RuxRadio>)
    );
    expect(radioRef.current).toEqual(ruxRadio);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeClick = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxRadioElement>(
      renderWithStrictMode(
        <RuxRadio onClick={FakeClick} label="Props as a string!">
          Label
        </RuxRadio>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeClick).toBeCalledTimes(1);
  });
  test("should add custom events", () => {
    const FakeBlur = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxRadioElement>(
      renderWithStrictMode(
        <RuxRadio label="Props as a string!" onRux-blur={FakeBlur}>
          Label
        </RuxRadio>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-blur");
  });
});
