/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxClock } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";

describe("RuxClock", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxClock></RuxClock>);
    const comp = container.getElementsByTagName("rux-clock")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    let date = new Date().toISOString();
    const { webcomponent: ruxClock } = includeWebComponent<HTMLRuxClockElement>(
      renderWithStrictMode(<RuxClock los={date} />)
    );
    expect(ruxClock.los).toEqual(date);
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxClock } = includeWebComponent<HTMLRuxClockElement>(
      renderWithStrictMode(<RuxClock hideDate={true} />)
    );
    expect(ruxClock.hideDate).toEqual(true);
  });
  it("should get numbers as props", () => {
    let date = new Date().getTime();
    const { webcomponent: ruxClock } = includeWebComponent<HTMLRuxClockElement>(
      renderWithStrictMode(<RuxClock aos={date} />)
    );
    expect(ruxClock.aos).toEqual(date);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const clockRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxClock } = includeWebComponent<HTMLRuxClockElement>(
      renderWithStrictMode(<RuxClock ref={clockRef}>Button Ref</RuxClock>)
    );
    expect(clockRef.current).toEqual(ruxClock);
  });
});
