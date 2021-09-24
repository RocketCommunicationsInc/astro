/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxPushButton } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxPushButton", () => {
  it("should be rendered by React", () => {
    const { container } = renderWithStrictMode(<RuxPushButton></RuxPushButton>);
    const comp = container.getElementsByTagName("rux-push-button")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxPushButton } =
      includeWebComponent<HTMLRuxPushButtonElement>(
        renderWithStrictMode(<RuxPushButton label="label"></RuxPushButton>)
      );
    expect(ruxPushButton.label).toEqual("label");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxPushButton } =
      includeWebComponent<HTMLRuxPushButtonElement>(
        renderWithStrictMode(
          <RuxPushButton checked={true} label="checked"></RuxPushButton>
        )
      );
    expect(ruxPushButton.checked).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const ruxPushButtonRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxPushButton } =
      includeWebComponent<HTMLRuxPushButtonElement>(
        renderWithStrictMode(
          <RuxPushButton ref={ruxPushButtonRef} label="label"></RuxPushButton>
        )
      );
    expect(ruxPushButtonRef.current).toEqual(ruxPushButton);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeClick = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxPushButtonElement>(
      renderWithStrictMode(
        <RuxPushButton
          checked={true}
          label="checked"
          onClick={FakeClick}
        ></RuxPushButton>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeClick).toBeCalledTimes(1);
  });
  test("should add custom events", () => {
    const FakeChange = jest.fn();
    const FakeBlur = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxPushButtonElement>(
      renderWithStrictMode(
        <RuxPushButton
          checked={true}
          label="checked"
          onRux-change={FakeChange}
          onRux-blur={FakeBlur}
        ></RuxPushButton>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-blur");
    expect(Object.keys(attatchedEvents)).toContain("rux-change");
  });
});
