/**
 * @jest-environment jsdom
 */

//ToDO: Tree is a special case - it was using the renderer from 'react-test-renderer' which was causing dep issues. Need to figure
//ToDO: out a work-around.

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

// import React from "react";
// import { RuxTree, RuxTreeNode } from "../src";
// import "@testing-library/jest-dom";
// // import renderer from "react-test-renderer";
// import {
//   renderWithStrictMode,
//   // includeWebComponent,
// } from "./common/commonFunctions";

// describe("RuxTree", () => {
//   it("should be rendered by react", () => {
//     const container = renderer.create(
//       <RuxTree>
//         <RuxTreeNode>Kid</RuxTreeNode>
//       </RuxTree>
//     );
//     let tree = container.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// describe("RuxTree", () => {
//   it("should be rendered by react", () => {
//     const { container } = renderWithStrictMode(
//       <RuxTree>
//         <RuxTreeNode>Child</RuxTreeNode>
//       </RuxTree>
//     );
//     const comp = container.getElementsByTagName("rux-tree")[0];
//     expect(comp).toBeInTheDocument();
//   });
// });
