/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import React from "react";
import { RuxLog } from "../src";
import "@testing-library/jest-dom";
import {
  renderWithStrictMode,
  includeWebComponent,
} from "./common/commonFunctions";
import { LogRow } from "@astrouxds/astro-web-components/dist/types/components/rux-log/rux-log.model";

describe("RuxLog", () => {
  it("should be rendered by react", () => {
    const { container } = renderWithStrictMode(<RuxLog></RuxLog>);
    const comp = container.getElementsByTagName("rux-log")[0];
    expect(comp).toBeInTheDocument();
  });
  it("should get strings as props", () => {
    const { webcomponent: ruxLog } = includeWebComponent<HTMLRuxLogElement>(
      renderWithStrictMode(<RuxLog timezone="America/Los_Angeles" />)
    );
    expect(ruxLog.timezone).toEqual("America/Los_Angeles");
  });
  it("should get arrays as props", () => {
    let logData: LogRow[] = [
      {
        timestamp: new Date(),
        status: "off",
        message: "Antenna DGS 1 went offline.",
      },
    ];
    const { webcomponent: ruxLog } = includeWebComponent<HTMLRuxLogElement>(
      renderWithStrictMode(<RuxLog data={logData} />)
    );
    expect(ruxLog.data).toEqual(logData);
  });
});
