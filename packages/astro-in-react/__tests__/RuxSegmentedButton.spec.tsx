/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxSegmentedButton } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";
import { SegmentedButton } from "@astrouxds/astro-web-components/dist/types/components/rux-segmented-button/rux-segmented-button.model";

const segmentedArr: SegmentedButton[] = [
  { label: "First segment" },
  { label: "Second segment", selected: true },
  { label: "Third segment" },
];

describe("RuxSegmentedButton", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxSegmentedButton></RuxSegmentedButton>
    );
    const comp = container.getElementsByTagName("rux-segmented-button")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get an array of type SegmentedButton as props", () => {
    const { webcomponent: ruxSegmented } =
      includeWebComponent<HTMLRuxSegmentedButtonElement>(
        renderWithStrictMode(
          <RuxSegmentedButton data={segmentedArr}></RuxSegmentedButton>
        )
      );
    expect(ruxSegmented.data).toEqual(segmentedArr);
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxSegmented } =
      includeWebComponent<HTMLRuxSegmentedButtonElement>(
        renderWithStrictMode(
          <RuxSegmentedButton
            data={segmentedArr}
            selected="Third Segment"
          ></RuxSegmentedButton>
        )
      );
    expect(ruxSegmented.selected).toEqual("Third Segment");
  });
});
describe("createComponent - ref", () => {
  const segmentRef: React.RefObject<HTMLRuxSegmentedButtonElement> =
    React.createRef();
  const { webcomponent: ruxSegmented } =
    includeWebComponent<HTMLRuxSegmentedButtonElement>(
      renderWithStrictMode(
        <RuxSegmentedButton
          data={segmentedArr}
          ref={segmentRef}
        ></RuxSegmentedButton>
      )
    );
  expect(segmentRef.current).toEqual(ruxSegmented);
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxSegmentedButtonElement>(
      renderWithStrictMode(
        <RuxSegmentedButton onClick={FakeOnClick}></RuxSegmentedButton>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });

  test("should add custom events", () => {
    const FakeChange = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxSegmentedButtonElement>(
      renderWithStrictMode(
        <RuxSegmentedButton onRux-change={FakeChange}></RuxSegmentedButton>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-change");
  });
});
