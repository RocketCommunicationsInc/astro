/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxSwitch } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxSwitch", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxSwitch></RuxSwitch>);
    const comp = container.getElementsByTagName("rux-switch")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxSwitch } =
      includeWebComponent<HTMLRuxSwitchElement>(
        renderWithStrictMode(<RuxSwitch value="Props as a string!"></RuxSwitch>)
      );
    expect(ruxSwitch.value).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxSwitch } =
      includeWebComponent<HTMLRuxSwitchElement>(
        renderWithStrictMode(<RuxSwitch disabled={true}></RuxSwitch>)
      );
    expect(ruxSwitch.disabled).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const switchRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxSwitch } =
      includeWebComponent<HTMLRuxSwitchElement>(
        renderWithStrictMode(<RuxSwitch ref={switchRef}></RuxSwitch>)
      );
    expect(switchRef.current).toEqual(ruxSwitch);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxSwitchElement>(
      renderWithStrictMode(<RuxSwitch onClick={FakeOnClick}></RuxSwitch>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
  test("should add custom events", () => {
    const FakeBlur = jest.fn();
    const FakeInput = jest.fn();
    const FakeChange = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxSwitchElement>(
      renderWithStrictMode(
        <RuxSwitch
          onRux-blur={FakeBlur}
          onRux-input={FakeInput}
          onRux-change={FakeChange}
        ></RuxSwitch>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-blur");
    expect(Object.keys(attatchedEvents)).toContain("rux-input");
    expect(Object.keys(attatchedEvents)).toContain("rux-change");
  });
});
