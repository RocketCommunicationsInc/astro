import React, { useState } from "react";
import { RuxButton } from "@astrouxds/react";

function RuxButtonTest() {
  const [clicked, setClicked] = useState(false);
  const [secondClick, setSecondClick] = useState(false);

  function handleDisabled(clicked: boolean | undefined) {
    if (!clicked) {
      return !clicked;
    } else if (clicked) {
      return undefined;
    }
  }

  return (
    <div>
      <RuxButton
        data-testid="rux-btn"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        Rux Button
      </RuxButton>
      <RuxButton
        // disabled={!clicked ? true : undefined}
        disabled={!clicked}
        data-testid="disabled"
        onClick={() => setSecondClick(!secondClick)}
      >
        Disabled Button
      </RuxButton>

      {clicked && (
        <textarea data-testid="text-area" defaultValue="Clicked!"></textarea>
      )}
      <br />
      {secondClick && (
        <textarea
          data-testid="text-area-2"
          defaultValue="Second Click!"
        ></textarea>
      )}
    </div>
  );
}

export default RuxButtonTest;
