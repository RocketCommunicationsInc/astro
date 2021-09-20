/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxButton } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";

describe("RuxButton", () => {
  it("should be rendered by React", () => {
    const { container } = renderWithStrictMode(<RuxButton>Button!</RuxButton>);
    const comp = container.getElementsByTagName("rux-button")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxButton } =
      includeWebComponent<HTMLRuxButtonElement>(
        renderWithStrictMode(<RuxButton size="large">Large Button</RuxButton>)
      );
    expect(ruxButton.size).toEqual("large");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxButton } =
      includeWebComponent<HTMLRuxButtonElement>(
        renderWithStrictMode(
          <RuxButton disabled={true}>Disabled Button</RuxButton>
        )
      );
    expect(ruxButton.disabled).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const ruxButtonRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxButton } =
      includeWebComponent<HTMLRuxButtonElement>(
        renderWithStrictMode(
          <RuxButton ref={ruxButtonRef}>Button Ref</RuxButton>
        )
      );
    expect(ruxButtonRef.current).toEqual(ruxButton);
  });
});
