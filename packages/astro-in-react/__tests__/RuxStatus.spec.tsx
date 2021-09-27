/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxStatus } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxStatus", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxStatus></RuxStatus>);
    const comp = container.getElementsByTagName("rux-status")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxStatus } =
      includeWebComponent<HTMLRuxStatusElement>(
        renderWithStrictMode(<RuxStatus status="standby"></RuxStatus>)
      );
    expect(ruxStatus.status).toEqual("standby");
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const StatusRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxStatus } =
      includeWebComponent<HTMLRuxStatusElement>(
        renderWithStrictMode(
          <RuxStatus ref={StatusRef} status="critical"></RuxStatus>
        )
      );
    expect(StatusRef.current).toEqual(ruxStatus);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxStatusElement>(
      renderWithStrictMode(
        <RuxStatus onClick={FakeOnClick} status="caution"></RuxStatus>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
});
