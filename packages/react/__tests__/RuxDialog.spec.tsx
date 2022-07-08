/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxDialog } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxDialog", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxDialog open={true}></RuxDialog>
    );
    const comp = container.getElementsByTagName("rux-dialog")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get bools as props", () => {
    const {
      webcomponent: ruxDialog,
    } = includeWebComponent<HTMLRuxDialogElement>(
      renderWithStrictMode(<RuxDialog open={true}></RuxDialog>)
    );
    expect(ruxDialog.open).toBe(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const modalRef: React.RefObject<HTMLRuxDialogElement> = React.createRef();
    const {
      webcomponent: ruxDialog,
    } = includeWebComponent<HTMLRuxDialogElement>(
      renderWithStrictMode(<RuxDialog ref={modalRef} open={true}></RuxDialog>)
    );
    expect(modalRef.current).toEqual(ruxDialog);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const modalRef: React.RefObject<HTMLRuxDialogElement> = React.createRef();
    const FakeClose = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxDialogElement>(
      renderWithStrictMode(
        <RuxDialog ref={modalRef} open={true} onClick={FakeClose}></RuxDialog>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeClose).toBeCalledTimes(1);
  });
  test("should add custom events", () => {
    const modalRef: React.RefObject<HTMLRuxDialogElement> = React.createRef();
    const FakeClose = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxDialogElement>(
      renderWithStrictMode(
        <RuxDialog
          ref={modalRef}
          open={true}
          onRuxdialogclosed={FakeClose}
        ></RuxDialog>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("ruxdialogclosed");
  });
});
