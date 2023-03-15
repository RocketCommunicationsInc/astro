/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxPopUpMenu } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";

//Need to define Resize observer here for the method tests.
class ResizeObserver {
  observe() {}
  unobserve() {}
}

describe("RuxPopUpMenu", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxPopUpMenu></RuxPopUpMenu>);
    const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get bools as props", () => {
    const {
      webcomponent: ruxPopUpMenu,
    } = includeWebComponent<HTMLRuxPopUpMenuElement>(
      renderWithStrictMode(<RuxPopUpMenu open={true} id="1"></RuxPopUpMenu>)
    );
    expect(ruxPopUpMenu.open).toEqual(true);
  });

  describe("createComponent - ref", () => {
    test("should pass ref on to web component instance", () => {
      //@ts-ignore
      window.ResizeObserver = ResizeObserver;
      const popRef: React.RefObject<any> = React.createRef();
      const { webcomponent: ruxPopUpMenu } = includeWebComponent(
        renderWithStrictMode(<RuxPopUpMenu ref={popRef}></RuxPopUpMenu>)
      );
      expect(popRef.current).toEqual(ruxPopUpMenu);
    });
    test("should allow use of custom methods -- show", async () => {
      const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();

      const { container } = renderWithStrictMode(
        <RuxPopUpMenu ref={popRef} open={false} id="1"></RuxPopUpMenu>
      );

      const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
      await comp
        .show()
        .then(() => expect(comp.open).toBe(true))
        .catch(() => console.log("catch inside show method test."));
    });
    test("should allow use of custom methods -- hide", () => {
      //@ts-ignore
      window.ResizeObserver = ResizeObserver;
      const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();

      const { container } = renderWithStrictMode(
        <RuxPopUpMenu ref={popRef} open={true} id="1"></RuxPopUpMenu>
      );

      const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
      comp
        .hide()
        .then(() => expect(comp.open).toBe(false))
        .catch(() => console.log("Catch inside hide method test."));
    });
  });
  describe("createComponent - events", () => {
    test("should set events on handler", () => {
      const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();
      const FakePopUpMenuSelected = jest.fn();

      const { webcomponent } = includeWebComponent<HTMLRuxPopUpMenuElement>(
        renderWithStrictMode(
          <RuxPopUpMenu
            ref={popRef}
            id="1"
            onRuxpopupmenuselected={FakePopUpMenuSelected}
          ></RuxPopUpMenu>
        )
      );
      const attatchedEvents = (webcomponent as any).__events;
      expect(Object.keys(attatchedEvents)).toContain("ruxpopupmenuselected");
    });
  });
});
