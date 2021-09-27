/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxSelect } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxSelect", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxSelect>
        <option value="">Select an option</option>
        <optgroup label="Group one">
          <option value="1.1">Option 1.1</option>
          <option value="1.2">Option 1.2</option>
          <option value="1.3">Option 1.3</option>
          <option value="1.4">Option 1.4</option>
        </optgroup>
        <optgroup label="Group two">
          <option value="2.1">Option 2.1</option>
          <option value="2.2">Option 2.2</option>
          <option value="2.3">Option 2.3</option>
          <option value="2.4">Option 2.4</option>
        </optgroup>
      </RuxSelect>
    );
    const comp = container.getElementsByTagName("rux-select")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxSelect } =
      includeWebComponent<HTMLRuxSelectElement>(
        renderWithStrictMode(
          <RuxSelect helpText="Props as a string!">
            {" "}
            <option value="">Select an option</option>
            <optgroup label="Group one">
              <option value="1.1">Option 1.1</option>
              <option value="1.2">Option 1.2</option>
              <option value="1.3">Option 1.3</option>
              <option value="1.4">Option 1.4</option>
            </optgroup>
            <optgroup label="Group two">
              <option value="2.1">Option 2.1</option>
              <option value="2.2">Option 2.2</option>
              <option value="2.3">Option 2.3</option>
              <option value="2.4">Option 2.4</option>
            </optgroup>
          </RuxSelect>
        )
      );
    expect(ruxSelect.helpText).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxSelect } =
      includeWebComponent<HTMLRuxSelectElement>(
        renderWithStrictMode(
          <RuxSelect disabled={true}>
            {" "}
            <option value="">Select an option</option>
            <optgroup label="Group one">
              <option value="1.1">Option 1.1</option>
              <option value="1.2">Option 1.2</option>
              <option value="1.3">Option 1.3</option>
              <option value="1.4">Option 1.4</option>
            </optgroup>
            <optgroup label="Group two">
              <option value="2.1">Option 2.1</option>
              <option value="2.2">Option 2.2</option>
              <option value="2.3">Option 2.3</option>
              <option value="2.4">Option 2.4</option>
            </optgroup>
          </RuxSelect>
        )
      );
    expect(ruxSelect.disabled).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const selectRef: React.RefObject<HTMLRuxSelectElement> = React.createRef();
    const { webcomponent: ruxSelect } =
      includeWebComponent<HTMLRuxSelectElement>(
        renderWithStrictMode(
          <RuxSelect ref={selectRef}>
            {" "}
            <option value="">Select an option</option>
            <optgroup label="Group one">
              <option value="1.1">Option 1.1</option>
              <option value="1.2">Option 1.2</option>
              <option value="1.3">Option 1.3</option>
              <option value="1.4">Option 1.4</option>
            </optgroup>
            <optgroup label="Group two">
              <option value="2.1">Option 2.1</option>
              <option value="2.2">Option 2.2</option>
              <option value="2.3">Option 2.3</option>
              <option value="2.4">Option 2.4</option>
            </optgroup>
          </RuxSelect>
        )
      );
    expect(selectRef.current).toEqual(ruxSelect);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxSelectElement>(
      renderWithStrictMode(
        <RuxSelect onClick={FakeOnClick}>
          {" "}
          <option value="">Select an option</option>
          <optgroup label="Group one">
            <option value="1.1">Option 1.1</option>
            <option value="1.2">Option 1.2</option>
            <option value="1.3">Option 1.3</option>
            <option value="1.4">Option 1.4</option>
          </optgroup>
          <optgroup label="Group two">
            <option value="2.1">Option 2.1</option>
            <option value="2.2">Option 2.2</option>
            <option value="2.3">Option 2.3</option>
            <option value="2.4">Option 2.4</option>
          </optgroup>
        </RuxSelect>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
});
test("should add custom events", () => {
  const FakeBlur = jest.fn();
  const FakeChange = jest.fn();
  const { webcomponent } = includeWebComponent<HTMLRuxSelectElement>(
    renderWithStrictMode(
      <RuxSelect onRux-blur={FakeBlur} onRux-change={FakeChange}>
        {" "}
        <option value="">Select an option</option>
        <optgroup label="Group one">
          <option value="1.1">Option 1.1</option>
          <option value="1.2">Option 1.2</option>
          <option value="1.3">Option 1.3</option>
          <option value="1.4">Option 1.4</option>
        </optgroup>
        <optgroup label="Group two">
          <option value="2.1">Option 2.1</option>
          <option value="2.2">Option 2.2</option>
          <option value="2.3">Option 2.3</option>
          <option value="2.4">Option 2.4</option>
        </optgroup>
      </RuxSelect>
    )
  );
  const attatchedEvents = (webcomponent as any).__events;
  expect(Object.keys(attatchedEvents)).toContain("rux-blur");
  expect(Object.keys(attatchedEvents)).toContain("rux-change");
});
