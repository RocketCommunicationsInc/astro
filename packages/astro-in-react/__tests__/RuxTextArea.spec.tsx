/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxTextarea } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxTextarea", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxTextarea></RuxTextarea>);
    const comp = container.getElementsByTagName("rux-textarea")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxTextarea } =
      includeWebComponent<HTMLRuxTextareaElement>(
        renderWithStrictMode(
          <RuxTextarea helpText="Props as a string!"></RuxTextarea>
        )
      );
    expect(ruxTextarea.helpText).toEqual("Props as a string!");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxTextarea } =
      includeWebComponent<HTMLRuxTextareaElement>(
        renderWithStrictMode(<RuxTextarea disabled={true}></RuxTextarea>)
      );
    expect(ruxTextarea.disabled).toEqual(true);
  });
  it("should get numbers as props", () => {
    const { webcomponent: ruxTextarea } =
      includeWebComponent<HTMLRuxTextareaElement>(
        renderWithStrictMode(<RuxTextarea rows={3}></RuxTextarea>)
      );
    expect(ruxTextarea.rows).toEqual(3);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const textareaRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxTextarea } =
      includeWebComponent<HTMLRuxTextareaElement>(
        renderWithStrictMode(<RuxTextarea ref={textareaRef}></RuxTextarea>)
      );
    expect(textareaRef.current).toEqual(ruxTextarea);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxTextareaElement>(
      renderWithStrictMode(<RuxTextarea onClick={FakeOnClick}></RuxTextarea>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });

  test("should add custom events", () => {
    const TextareaRef: React.RefObject<HTMLRuxTextareaElement> =
      React.createRef();
    const FakeBlur = jest.fn();
    const FakeTextarea = jest.fn();
    const FakeChange = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxTextareaElement>(
      renderWithStrictMode(
        <RuxTextarea
          ref={TextareaRef}
          onRux-blur={FakeBlur}
          onRux-change={FakeChange}
          onRux-Textarea={FakeTextarea}
        ></RuxTextarea>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-blur");
    expect(Object.keys(attatchedEvents)).toContain("rux-change");
    expect(Object.keys(attatchedEvents)).toContain("rux-Textarea");
  });
});
