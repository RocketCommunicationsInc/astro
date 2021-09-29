/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxIcon } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";

describe("RuxIcon", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxIcon icon="close" />);
    const comp = container.getElementsByTagName("rux-icon")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxIcon } = includeWebComponent<HTMLRuxIconElement>(
      renderWithStrictMode(<RuxIcon icon="close" label="Close" />)
    );
    expect(ruxIcon.label).toEqual("Close");
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const iconRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxIcon } = includeWebComponent<HTMLRuxIconElement>(
      renderWithStrictMode(<RuxIcon ref={iconRef} icon="close" />)
    );
    expect(iconRef.current).toEqual(ruxIcon);
  });
});
