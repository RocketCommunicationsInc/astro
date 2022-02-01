import { fireEvent as fireEvent } from "@testing-library/react";

function ruxmodalclosed(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent("ruxmodalclosed"));
}

export const ruxFireEvent = Object.assign(fireEvent, { ruxmodalclosed });
