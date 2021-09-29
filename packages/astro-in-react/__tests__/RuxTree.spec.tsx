/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxTree, RuxTreeNode } from "../src";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

describe("RuxTree", () => {
  it("should be rendered by react", () => {
    const container = renderer.create(
      <RuxTree>
        <RuxTreeNode>Kid</RuxTreeNode>
      </RuxTree>
    );
    let tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
