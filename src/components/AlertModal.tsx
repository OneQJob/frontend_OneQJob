import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type AlertModalProps = {
  message: string;
  buttonText?: string;
  onConfirm?: () => void;
  redirectTo?: string;
};

const AlertModal = ({
  message,
  buttonText = "확인",
  onConfirm,
  redirectTo,
}: AlertModalProps) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    if (onConfirm) {
      onConfirm();
    }

    setShow(false);

    if (redirectTo) {
      navigate(redirectTo);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{ textAlign: "center" }}
    >
      <Modal.Body className="mt-4 mx-4">{message}</Modal.Body>
      <Modal.Footer
        className="mb-4"
        style={{ borderTop: "none", justifyContent: "center" }}
      >
        <Button variant="primary" onClick={handleClose}>
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
