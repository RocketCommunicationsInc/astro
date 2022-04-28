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
      const popRef: React.RefObject<any> = React.createRef();
      const { webcomponent: ruxPopUpMenu } = includeWebComponent(
        renderWithStrictMode(<RuxPopUpMenu ref={popRef}></RuxPopUpMenu>)
      );
      expect(popRef.current).toEqual(ruxPopUpMenu);
    });
    test("should allow use of custom methods -- show", () => {
      const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();

      const { container } = renderWithStrictMode(
        <RuxPopUpMenu ref={popRef} open={true} id="1"></RuxPopUpMenu>
      );

      const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
      expect(popRef.current).toEqual(comp);
      return comp.show().then((res) => {
        expect(res).toEqual(true);
      });
    });
    test("should allow use of custom methods -- hide", () => {
      const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();

      const { container } = renderWithStrictMode(
        <RuxPopUpMenu ref={popRef} open={false} id="1"></RuxPopUpMenu>
      );

      const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
      expect(popRef.current).toEqual(comp);
      return comp.hide().then((res) => {
        expect(res).toEqual(false);
      });
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
