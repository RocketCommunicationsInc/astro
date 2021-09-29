/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxTab } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxTab", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxTab></RuxTab>);
    const comp = container.getElementsByTagName("rux-tab")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxTab } = includeWebComponent<HTMLRuxTabElement>(
      renderWithStrictMode(<RuxTab disabled={true}></RuxTab>)
    );
    expect(ruxTab.disabled).toEqual(true);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxTabElement>(
      renderWithStrictMode(<RuxTab onClick={FakeOnClick}></RuxTab>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
});
