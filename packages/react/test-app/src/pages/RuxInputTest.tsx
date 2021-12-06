import React, { useState, useEffect } from "react";
import { RuxInput } from "@astrouxds/react";

function RuxInputTest() {
  const [ruxInput, setRuxInput] = useState("");
  // const [valid, setValid] = useState(false);

  function handleSubmit() {
    alert(`
      RuxInput: ${ruxInput}
    `);
  }
  // useEffect(() => {
  //   if (ruxInput && ruxInput.includes("@")) {
  //     setValid(true);
  //   } else setValid(false);
  // }, [ruxInput]);

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
          error-text={ruxInput.includes("@") ? undefined : "Error text."}
        />
      </form>
    </div>
  );
}

export default RuxInputTest;
