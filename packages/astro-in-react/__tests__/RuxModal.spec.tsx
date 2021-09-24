/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxModal } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";
// import { fireEvent } from "@testing-library/dom";

describe("RuxModal", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxModal modalMessage="Test" modalTitle="Testing" open={true}></RuxModal>
    );
    const comp = container.getElementsByTagName("rux-modal")[0];
    expect(comp).toBeInTheDocument();
  });
  //! The below tests are causing a console error: 'Following Properties (modal-message, modal-title)
  //! are required'. They're there tho
  it("should get strings as props", () => {
    const { webcomponent: ruxModal } = includeWebComponent<HTMLRuxModalElement>(
      renderWithStrictMode(
        <RuxModal
          modalMessage={"Test"}
          modalTitle="Testing"
          open={true}
        ></RuxModal>
      )
    );
    expect(ruxModal.modalMessage).toEqual("Test");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxModal } = includeWebComponent<HTMLRuxModalElement>(
      renderWithStrictMode(
        <RuxModal
          modalMessage="Test"
          modalTitle="Testing"
          open={true}
        ></RuxModal>
      )
    );
    expect(ruxModal.open).toBe(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const modalRef: React.RefObject<HTMLRuxModalElement> = React.createRef();
    const { webcomponent: ruxModal } = includeWebComponent<HTMLRuxModalElement>(
      renderWithStrictMode(
        <RuxModal
          ref={modalRef}
          modalMessage="Test"
          modalTitle="Testing"
          open={true}
        ></RuxModal>
      )
    );
    expect(modalRef.current).toEqual(ruxModal);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const modalRef: React.RefObject<HTMLRuxModalElement> = React.createRef();
    const FakeClose = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxModalElement>(
      renderWithStrictMode(
        <RuxModal
          ref={modalRef}
          modalMessage="Test"
          modalTitle="Testing"
          open={true}
          onClick={FakeClose}
        ></RuxModal>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeClose).toBeCalledTimes(1);
  });
  test("should add custom events", () => {
    const modalRef: React.RefObject<HTMLRuxModalElement> = React.createRef();
    const FakeClose = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxModalElement>(
      renderWithStrictMode(
        <RuxModal
          ref={modalRef}
          modalMessage="Test"
          modalTitle="Testing"
          open={true}
          onRux-modal-closed={FakeClose}
        ></RuxModal>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-modal-closed");
  });
});
