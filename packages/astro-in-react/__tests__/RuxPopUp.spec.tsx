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
// import { fireEvent } from "@testing-library/dom";
import { RuxIcon } from "../src";

describe("RuxPopUpMenu", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxPopUpMenu></RuxPopUpMenu>);
    const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get bools as props", () => {
    const { webcomponent: icon } = includeWebComponent<HTMLRuxIconAppsElement>(
      renderWithStrictMode(<RuxIcon icon="apps" aria-controls="1" />)
    );
    const { webcomponent: ruxPopUpMenu } =
      includeWebComponent<HTMLRuxPopUpMenuElement>(
        renderWithStrictMode(
          <RuxPopUpMenu open={true} anchorEl={icon} id="1"></RuxPopUpMenu>
        )
      );
    expect(ruxPopUpMenu.open).toEqual(true);
  });
  it("should get objects as props", () => {
    const { webcomponent: icon } = includeWebComponent<HTMLRuxIconAppsElement>(
      renderWithStrictMode(<RuxIcon icon="apps" />)
    );
    const { webcomponent: ruxPopUpMenu } =
      includeWebComponent<HTMLRuxPopUpMenuElement>(
        renderWithStrictMode(<RuxPopUpMenu triggerEl={icon} />)
      );
    expect(ruxPopUpMenu.triggerEl).toEqual(icon);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const popRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxPopUpMenu } = includeWebComponent(
      renderWithStrictMode(<RuxPopUpMenu ref={popRef}></RuxPopUpMenu>)
    );
    expect(popRef.current).toEqual(ruxPopUpMenu);
  });
  test("should allow use of custom methods -- isOpen", () => {
    const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();
    const { webcomponent: icon } = includeWebComponent<HTMLRuxIconAppsElement>(
      renderWithStrictMode(<RuxIcon icon="apps" aria-controls="1" />)
    );
    const { container } = renderWithStrictMode(
      <RuxPopUpMenu
        ref={popRef}
        open={true}
        triggerEl={icon}
        id="1"
      ></RuxPopUpMenu>
    );

    const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
    expect(popRef.current).toEqual(comp);
    return comp.isOpen().then((res) => {
      expect(res).toEqual(true);
    });
  });
  test("should allow use of custom methods -- show", () => {
    const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();
    const { webcomponent: icon } = includeWebComponent<HTMLRuxIconAppsElement>(
      renderWithStrictMode(<RuxIcon icon="apps" aria-controls="1" />)
    );
    const { container } = renderWithStrictMode(
      <RuxPopUpMenu
        ref={popRef}
        open={false}
        triggerEl={icon}
        id="1"
      ></RuxPopUpMenu>
    );

    const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
    expect(popRef.current).toEqual(comp);
    return comp.show().then((res) => {
      expect(res).toEqual(true);
    });
  });
  test("should allow use of custom methods -- close", () => {
    const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();
    const { webcomponent: icon } = includeWebComponent<HTMLRuxIconAppsElement>(
      renderWithStrictMode(<RuxIcon icon="apps" aria-controls="1" />)
    );
    const { container } = renderWithStrictMode(
      <RuxPopUpMenu
        ref={popRef}
        open={true}
        triggerEl={icon}
        id="1"
      ></RuxPopUpMenu>
    );

    const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
    expect(popRef.current).toEqual(comp);
    return comp.close().then((res) => {
      expect(res).toEqual(true);
    });
  });
  test("should allow use of custom methods -- toggle", () => {
    const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();
    const { webcomponent: icon } = includeWebComponent<HTMLRuxIconAppsElement>(
      renderWithStrictMode(<RuxIcon icon="apps" aria-controls="1" />)
    );
    const { container } = renderWithStrictMode(
      <RuxPopUpMenu
        ref={popRef}
        open={true}
        triggerEl={icon}
        id="1"
      ></RuxPopUpMenu>
    );

    const comp = container.getElementsByTagName("rux-pop-up-menu")[0];
    expect(popRef.current).toEqual(comp);
    return comp.toggle().then((res) => {
      expect(res).toEqual(false);
    });
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const popRef: React.RefObject<HTMLRuxPopUpMenuElement> = React.createRef();
    const FakeDidClose = jest.fn();
    const FakeDidOpen = jest.fn();
    const FakeWillClose = jest.fn();
    const FakeWillOpen = jest.fn();
    const { webcomponent: icon } = includeWebComponent<HTMLRuxIconAppsElement>(
      renderWithStrictMode(<RuxIcon icon="apps" aria-controls="1" />)
    );
    const { webcomponent } = includeWebComponent<HTMLRuxPopUpMenuElement>(
      renderWithStrictMode(
        <RuxPopUpMenu
          ref={popRef}
          triggerEl={icon}
          id="1"
          onRux-menu-will-close={FakeWillClose}
          onRux-menu-will-open={FakeWillOpen}
          onRux-menu-did-open={FakeDidOpen}
          onRux-menu-did-close={FakeDidClose}
        ></RuxPopUpMenu>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-menu-did-close");
    expect(Object.keys(attatchedEvents)).toContain("rux-menu-did-open");
    expect(Object.keys(attatchedEvents)).toContain("rux-menu-will-close");
    expect(Object.keys(attatchedEvents)).toContain("rux-menu-will-open");
  });
});
