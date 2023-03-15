import { HTMLStencilElement } from "@astrouxds/astro-web-components/dist/types/stencil-public-runtime";
import { render, RenderResult } from "@testing-library/react";
import React from "react";

export function includeWebComponent<T extends HTMLStencilElement>(
  results: RenderResult
) {
  const webcomponent = results.container.children[0] as T;
  return {
    ...results,
    webcomponent,
  };
}

export function renderWithStrictMode(children: React.ReactElement) {
  return render(<React.StrictMode>{children}</React.StrictMode>);
}

module.exports = {
  includeWebComponent,
  renderWithStrictMode,
};
