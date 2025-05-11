import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModal}>
          <Modal.Header>
            <h4>This is modal title</h4>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <h1 className="text-2xl text-center my-2">This is a modal</h1>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
