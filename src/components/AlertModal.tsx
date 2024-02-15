import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface AlertModalProps {
  message: string;
  show: boolean;
  onClose: () => void;
  buttonText?: string;
  onConfirm?: () => void;
  redirectTo?: string;
}

const AlertModal = ({
  message,
  show,
  onClose,
  buttonText = "확인",
  onConfirm,
  redirectTo,
}: AlertModalProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    }

    if (onConfirm) {
      onConfirm();
    }

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
