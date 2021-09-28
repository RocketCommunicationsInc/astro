/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

// import React from "react";
// import { RuxTree, RuxTreeNode } from "../src";
// import "@testing-library/jest-dom";
// import {
//   renderWithStrictMode,
//   //   includeWebComponent,
// } from "./common/commonFunctions";
// // import { fireEvent } from "@testing-library/dom";

// describe("RuxTree", () => {
//   it("should be rendered by react", () => {
//     const { container } = renderWithStrictMode(
//       <RuxTree>
//         <RuxTreeNode>
//           Child
//           <RuxTreeNode slot="node">Child</RuxTreeNode>
//         </RuxTreeNode>
//       </RuxTree>
//     );
//     const comp = container.getElementsByTagName("rux-tree-node")[0];
//     expect(comp).toBeInTheDocument();
//   });
// });
// // describe("createComponent - ref", () => {
// //   test("should pass ref on to web component instance", () => {
// //     const TreeRef: React.RefObject<any> = React.createRef();
// //     const { webcomponent: ruxTree } = includeWebComponent<HTMLRuxTreeElement>(
// //       renderWithStrictMode(<RuxTree ref={TreeRef}></RuxTree>)
// //     );
// //     expect(TreeRef.current).toEqual(ruxTree);
// //   });
// // });
// // describe("createComponent - events", () => {
// //   test("should set events on handler", () => {
// //     const FakeOnClick = jest.fn((e) => e);
// //     const { webcomponent } = includeWebComponent<HTMLRuxTreeElement>(
// //       renderWithStrictMode(<RuxTree onClick={FakeOnClick}></RuxTree>)
// //     );
// //     fireEvent.click(webcomponent);
// //     expect(FakeOnClick).toBeCalledTimes(1);
// //   });
// // });
