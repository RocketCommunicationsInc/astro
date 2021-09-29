/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxTable } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxTable", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxTable></RuxTable>);
    const comp = container.getElementsByTagName("rux-table")[0];
    expect(comp).toBeInTheDocument();
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const TableRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxTable } = includeWebComponent<HTMLRuxTableElement>(
      renderWithStrictMode(<RuxTable ref={TableRef}></RuxTable>)
    );
    expect(TableRef.current).toEqual(ruxTable);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxTableElement>(
      renderWithStrictMode(<RuxTable onClick={FakeOnClick}></RuxTable>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
});
