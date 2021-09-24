/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxProgress } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";

describe("RuxProgress", () => {
  it("should be rendered by React", () => {
    const { container } = renderWithStrictMode(<RuxProgress></RuxProgress>);
    const comp = container.getElementsByTagName("rux-progress")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get numbers as props", () => {
    const { webcomponent: ruxProgress } =
      includeWebComponent<HTMLRuxProgressElement>(
        renderWithStrictMode(<RuxProgress max={150}></RuxProgress>)
      );
    expect(ruxProgress.max).toEqual(150);
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxProgress } =
      includeWebComponent<HTMLRuxProgressElement>(
        renderWithStrictMode(
          <RuxProgress hideLabel={true} max={150}></RuxProgress>
        )
      );
    expect(ruxProgress.hideLabel).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const ruxProgressRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxProgress } =
      includeWebComponent<HTMLRuxProgressElement>(
        renderWithStrictMode(
          <RuxProgress ref={ruxProgressRef}>Button Ref</RuxProgress>
        )
      );
    expect(ruxProgressRef.current).toEqual(ruxProgress);
  });
});
