import { useState } from "react";
import { RuxModal, RuxButton } from "@astrouxds/react";

function RuxModalTest() {
  const [open, setOpen] = useState(false);

  function handleModalClose() {}
  return (
    <div>
      <RuxButton onClick={() => setOpen(!open)} data-testid="btn">
        Open Modal
      </RuxButton>
      <br />
      {/*
            ? Uncomment out for when modal w/ slots is released.
            <RuxModal open={open}>
                <h4 slot="header">Header</h4>
                <div slot="message">Message here, as a slot!</div>
                <div slot="footer">
                    <RuxButton secondary>Deny</RuxButton>
                    <RuxButton>Confirm</RuxButton>
                </div>
            </RuxModal>
          */}
      <RuxModal
        data-testid="modal"
        modalMessage="Message"
        modalTitle="Title"
        open={open}
        onRuxmodalclosed={() => setOpen(false)}
      />
    </div>
  );
}

export default RuxModalTest;
