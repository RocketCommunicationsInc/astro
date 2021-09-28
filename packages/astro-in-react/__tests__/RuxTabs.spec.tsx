/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxTabs, RuxTab } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxTabs", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxTabs id="tab-set-id-1">
        <RuxTab id="tab-id-1">A single Tab!</RuxTab>
      </RuxTabs>
    );
    const comp = container.getElementsByTagName("rux-tabs")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxTabs } = includeWebComponent<HTMLRuxTabsElement>(
      renderWithStrictMode(<RuxTabs small={true}></RuxTabs>)
    );
    expect(ruxTabs.small).toEqual(true);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxTabsElement>(
      renderWithStrictMode(<RuxTabs onClick={FakeOnClick}></RuxTabs>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxTabsElement>(
      renderWithStrictMode(<RuxTabs onClick={FakeOnClick}></RuxTabs>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
  test("should add custom events", () => {
    const FakeSelected = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxTabsElement>(
      renderWithStrictMode(
        <RuxTabs id="tab-set-id-1" onRux-selected={FakeSelected}>
          <RuxTab id="tab-id-1">A single Tab!</RuxTab>
        </RuxTabs>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-selected");
  });
});
