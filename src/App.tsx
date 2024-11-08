import React from "react";
import Modal from "./components/shared/Modal";

function App() {
  const [open, setIsOpen] = React.useState(false);
  return (
    <>
      <Modal isOpen={open}>
        <div onClick={() => setIsOpen((prev) => !prev)}>Close</div>
      </Modal>
      <div onClick={() => setIsOpen((prev) => !prev)}>Busha</div>;
    </>
  );
}

export default App;
