/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxMonitoringProgressIcon } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
//   import { fireEvent } from "@testing-library/dom";
import { RangeItem } from "@astrouxds/astro-web-components/dist/types/components/rux-monitoring-progress-icon/rux-monitoring-progress-icon";

const rangeItem: RangeItem[] = [
  {
    threshold: 17,
    status: "off",
  },
];

describe("RuxMonitoringProgressIcon", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxMonitoringProgressIcon range={rangeItem}></RuxMonitoringProgressIcon>
    );
    const comp = container.getElementsByTagName(
      "rux-monitoring-progress-icon"
    )[0];
    expect(comp).toBeInTheDocument();
  });
  it("should take strings as props", () => {
    const { webcomponent: ruxIcon } =
      includeWebComponent<HTMLRuxMonitoringProgressIconElement>(
        renderWithStrictMode(
          <RuxMonitoringProgressIcon
            range={rangeItem}
            label="Hello there"
          ></RuxMonitoringProgressIcon>
        )
      );
    expect(ruxIcon.label).toEqual("Hello there");
  });
  it("should take numbers as props", () => {
    const { webcomponent: ruxIcon } =
      includeWebComponent<HTMLRuxMonitoringProgressIconElement>(
        renderWithStrictMode(
          <RuxMonitoringProgressIcon
            range={rangeItem}
            min={10}
            max={20}
          ></RuxMonitoringProgressIcon>
        )
      );
    expect(ruxIcon.min).toEqual(10);
    expect(ruxIcon.max).toEqual(20);
  });
  it("should take a RangeItem[] type as props", () => {
    const { webcomponent: ruxIcon } =
      includeWebComponent<HTMLRuxMonitoringProgressIconElement>(
        renderWithStrictMode(
          <RuxMonitoringProgressIcon
            range={rangeItem}
          ></RuxMonitoringProgressIcon>
        )
      );
    expect(ruxIcon.range).toEqual(rangeItem);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const RuxMonitoringProgressIconRef: React.RefObject<any> =
      React.createRef();
    const { webcomponent: ruxMonitoringProgressIcon } =
      includeWebComponent<HTMLRuxMonitoringProgressIconElement>(
        renderWithStrictMode(
          <RuxMonitoringProgressIcon
            ref={RuxMonitoringProgressIconRef}
            range={rangeItem}
          ></RuxMonitoringProgressIcon>
        )
      );
    expect(RuxMonitoringProgressIconRef.current).toEqual(
      ruxMonitoringProgressIcon
    );
  });
});
