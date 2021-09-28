/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxTreeNode } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";

describe("RuxTree", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxTreeNode>
        Child
        <RuxTreeNode slot="node">Child</RuxTreeNode>
      </RuxTreeNode>
    );
    const comp = container.getElementsByTagName("rux-tree-node")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should take bools as props", () => {
    const { webcomponent: ruxTreeNode } =
      includeWebComponent<HTMLRuxTreeNodeElement>(
        renderWithStrictMode(<RuxTreeNode expanded={true}>Child</RuxTreeNode>)
      );
    expect(ruxTreeNode.expanded).toEqual(true);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const TreeRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxTree } = includeWebComponent<HTMLRuxTreeElement>(
      renderWithStrictMode(<RuxTreeNode ref={TreeRef}></RuxTreeNode>)
    );
    expect(TreeRef.current).toEqual(ruxTree);
  });
  test("should allow use of custom methods -- setExpanded", () => {
    const nodeRef: React.RefObject<HTMLRuxTreeNodeElement> = React.createRef();
    const { container } = renderWithStrictMode(
      <RuxTreeNode ref={nodeRef}>Child</RuxTreeNode>
    );
    const comp = container.getElementsByTagName("rux-tree-node")[0];
    expect(nodeRef.current).toEqual(comp);

    return comp.setExpanded(true).then(() => {
      expect(comp.expanded).toEqual(true);
    });
  });
  test("should allow use of custom methods -- setSelected", () => {
    const nodeRef: React.RefObject<HTMLRuxTreeNodeElement> = React.createRef();
    const { container } = renderWithStrictMode(
      <RuxTreeNode ref={nodeRef}>Child</RuxTreeNode>
    );
    const comp = container.getElementsByTagName("rux-tree-node")[0];
    expect(nodeRef.current).toEqual(comp);

    return comp.setSelected(true).then(() => {
      expect(comp.selected).toEqual(true);
    });
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeOnClick = jest.fn((e) => e);
    const { webcomponent } = includeWebComponent<HTMLRuxTreeElement>(
      renderWithStrictMode(<RuxTreeNode onClick={FakeOnClick}></RuxTreeNode>)
    );
    fireEvent.click(webcomponent);
    expect(FakeOnClick).toBeCalledTimes(1);
  });
  test("should set custom events", () => {
    const FakeNodeSelected = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxTreeElement>(
      renderWithStrictMode(
        <RuxTreeNode onRux-tree-node-selected={FakeNodeSelected}></RuxTreeNode>
      )
    );
    const attatchedEvents = (webcomponent as any).__events;
    expect(Object.keys(attatchedEvents)).toContain("rux-tree-node-selected");
  });
});
