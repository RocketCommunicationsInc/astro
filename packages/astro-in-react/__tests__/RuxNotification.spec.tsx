/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxNotification } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";

describe("RuxNotification", () => {
  it("should be rendered by React", () => {
    const { container } = renderWithStrictMode(
      <RuxNotification></RuxNotification>
    );
    const comp = container.getElementsByTagName("rux-notification")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxNotification } =
      includeWebComponent<HTMLRuxNotificationElement>(
        renderWithStrictMode(
          <RuxNotification
            message="Message"
            status="critical"
          ></RuxNotification>
        )
      );
    expect(ruxNotification.message).toEqual("Message");
    expect(ruxNotification.status).toEqual("critical");
  });
  it("should get bools as props", () => {
    const { webcomponent: ruxNotification } =
      includeWebComponent<HTMLRuxNotificationElement>(
        renderWithStrictMode(<RuxNotification open={true}></RuxNotification>)
      );
    expect(ruxNotification.open).toEqual(true);
  });
  it("should get numbers as props", () => {
    const { webcomponent: ruxNotification } =
      includeWebComponent<HTMLRuxNotificationElement>(
        renderWithStrictMode(<RuxNotification closeAfter={3}></RuxNotification>)
      );
    expect(ruxNotification.closeAfter).toEqual(3);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const ruxNotificationRef: React.RefObject<any> = React.createRef();
    const { webcomponent: ruxNotification } =
      includeWebComponent<HTMLRuxNotificationElement>(
        renderWithStrictMode(
          <RuxNotification ref={ruxNotificationRef}></RuxNotification>
        )
      );
    expect(ruxNotificationRef.current).toEqual(ruxNotification);
  });
});
