/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxClassificationMarking } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";

describe("RuxClassificationMarking", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxClassificationMarking></RuxClassificationMarking>
    );
    const comp = container.getElementsByTagName(
      "rux-classification-marking"
    )[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxClassificationMarking } =
      includeWebComponent<HTMLRuxClassificationMarkingElement>(
        renderWithStrictMode(
          <RuxClassificationMarking classification="confidential" />
        )
      );
    expect(ruxClassificationMarking.classification).toEqual("confidential");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxClassificationMarking } =
      includeWebComponent<HTMLRuxClassificationMarkingElement>(
        renderWithStrictMode(<RuxClassificationMarking tag={true} />)
      );
    expect(ruxClassificationMarking.tag).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const markingRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxClassificationMarking } =
      includeWebComponent<HTMLRuxClassificationMarkingElement>(
        renderWithStrictMode(<RuxClassificationMarking ref={markingRef} />)
      );
    expect(markingRef.current).toEqual(ruxClassificationMarking);
  });
});
