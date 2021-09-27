/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxSlider } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxSlider", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxSlider></RuxSlider>);
    const comp = container.getElementsByTagName("rux-Slider")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxSlider } =
      includeWebComponent<HTMLRuxSliderElement>(
        renderWithStrictMode(
          <RuxSlider helpText="Props as a string!"></RuxSlider>
        )
      );
    expect(ruxSlider.helpText).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxSlider } =
      includeWebComponent<HTMLRuxSliderElement>(
        renderWithStrictMode(<RuxSlider disabled={true}></RuxSlider>)
      );
    expect(ruxSlider.disabled).toEqual(true);
  });
  it("should get numbers as props", () => {
    const { webcomponent: ruxSlider } =
      includeWebComponent<HTMLRuxSliderElement>(
        renderWithStrictMode(
          <RuxSlider max={150} min={50} step={5}></RuxSlider>
        )
      );
    expect(ruxSlider.max).toEqual(150);
    expect(ruxSlider.min).toEqual(50);
    expect(ruxSlider.step).toEqual(5);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const sliderRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxSlider } =
      includeWebComponent<HTMLRuxSliderElement>(
        renderWithStrictMode(<RuxSlider ref={sliderRef}></RuxSlider>)
      );
    expect(sliderRef.current).toEqual(ruxSlider);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxSliderElement>(
      renderWithStrictMode(<RuxSlider onClick={FakeOnClick}></RuxSlider>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
  test("should add custom events", () => {
    const FakeBlur = jest.fn();
    const FakeInput = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxSliderElement>(
      renderWithStrictMode(
        <RuxSlider onRux-blur={FakeBlur} onRux-input={FakeInput}></RuxSlider>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-blur");
    expect(Object.keys(attatchedEvents)).toContain("rux-input");
  });
});
