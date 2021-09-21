/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxGlobalStatusBar } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";

describe("RuxGlobalStatusBar", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxGlobalStatusBar></RuxGlobalStatusBar>
    );
    const comp = container.getElementsByTagName("rux-global-status-bar")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxGlobalStatusBar } =
      includeWebComponent<HTMLRuxGlobalStatusBarElement>(
        renderWithStrictMode(<RuxGlobalStatusBar appDomain="Hyrule" />)
      );
    expect(ruxGlobalStatusBar.appDomain).toEqual("Hyrule");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxGlobalStatusBar } =
      includeWebComponent<HTMLRuxGlobalStatusBarElement>(
        renderWithStrictMode(<RuxGlobalStatusBar includeIcon={true} />)
      );
    expect(ruxGlobalStatusBar.includeIcon).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const gsbRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxGlobalStatusBar } =
      includeWebComponent<HTMLRuxGlobalStatusBarElement>(
        renderWithStrictMode(<RuxGlobalStatusBar ref={gsbRef} />)
      );
    expect(gsbRef.current).toEqual(ruxGlobalStatusBar);
  });
});
