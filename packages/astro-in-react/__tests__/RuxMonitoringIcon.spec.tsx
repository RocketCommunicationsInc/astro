/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxMonitoringIcon } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { fireEvent } from "@testing-library/dom";
//   import { fireEvent } from "@testing-library/dom";

describe("RuxMonitoringIcon", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(
      <RuxMonitoringIcon icon="help" label="icon"></RuxMonitoringIcon>
    );
    const comp = container.getElementsByTagName("rux-monitoring-icon")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxMonitor } =
      includeWebComponent<HTMLRuxMonitoringIconElement>(
        renderWithStrictMode(
          <RuxMonitoringIcon icon="help" label="icon"></RuxMonitoringIcon>
        )
      );
    expect(ruxMonitor.label).toEqual("icon");
  });
  it("should get numbers as props", () => {
    const { webcomponent: ruxMonitor } =
      includeWebComponent<HTMLRuxMonitoringIconElement>(
        renderWithStrictMode(
          <RuxMonitoringIcon
            icon="help"
            label="icon"
            notifications={13}
          ></RuxMonitoringIcon>
        )
      );
    expect(ruxMonitor.notifications).toEqual(13);
  });
});
describe("createComponent - ref", () => {
  test("should pass ref on to web component instance", () => {
    const iconRef: React.RefObject<HTMLRuxMonitoringIconElement> =
      React.createRef();
    const { webcomponent: ruxMonitor } =
      includeWebComponent<HTMLRuxMonitoringIconElement>(
        renderWithStrictMode(
          <RuxMonitoringIcon
            ref={iconRef}
            icon="help"
            label="icon"
          ></RuxMonitoringIcon>
        )
      );
    expect(iconRef.current).toEqual(ruxMonitor);
  });
});
describe("createComponent - events", () => {
  test("should set events on handler", () => {
    const FakeClick = jest.fn();
    const { webcomponent } = includeWebComponent<HTMLRuxMonitoringIconElement>(
      renderWithStrictMode(
        <RuxMonitoringIcon
          icon="help"
          label="icon"
          onClick={FakeClick}
        ></RuxMonitoringIcon>
      )
    );
    fireEvent.click(webcomponent);
    expect(FakeClick).toBeCalledTimes(1);
  });
});
