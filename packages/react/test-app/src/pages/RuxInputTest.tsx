import React, { useState } from "react";
import { RuxInput, RuxButton } from "@astrouxds/react";

function RuxInputTest() {
  const [ruxInput, setRuxInput] = useState("");
  const [ruxInput2, setRuxInput2] = useState("");
  const [valid, setValid] = useState(false);

  function handleSubmit() {
    alert(`
      RuxInput: ${ruxInput}
    `);
  }
  function validate() {
    ruxInput2.includes("Cid") ? setValid(true) : setValid(false);
  }

  return (
    <div className="form">
      <form
        style={{ width: "50%", padding: "5%" }}
        onSubmit={handleSubmit}
        data-testid="form"
      >
        <RuxInput
          data-testid="rux-input-test"
          type="text"
          label="Rux Input"
          value={ruxInput}
          onRuxinput={(e: CustomEvent<HTMLRuxInputElement>) => {
            const target = e.target as HTMLInputElement;
            setRuxInput(target.value);
          }}
          name="rux-input"
          errorText={ruxInput.includes("@") ? undefined : "Error text."}
        />
        <RuxInput
          data-testid="input-2"
          type="text"
          label="Rux Input 2"
          onRuxinput={(e: CustomEvent<HTMLRuxInputElement>) => {
            const target = e.target as HTMLInputElement;
            setRuxInput2(target.value);
          }}
          onRuxblur={() => validate()}
          //! using errorText generates two attr - error-text and errorText.
          errorText={valid ? undefined : "Enter cid"}
        />
        <RuxButton data-testid="btn">Maybe</RuxButton>
      </form>
    </div>
  );
}

export default RuxInputTest;
