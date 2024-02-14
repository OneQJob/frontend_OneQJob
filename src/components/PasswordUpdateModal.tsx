import { Button, Form, Modal } from "react-bootstrap";

interface PasswordUpdateModalProps {
  show: boolean;
  onClose: () => void;
}

const PasswordUpdateModal = ({ show, onClose }: PasswordUpdateModalProps) => {
  return (
    <Modal show={show} onClose={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>비밀번호 변경</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="passwordUpdate">
            <Form.Label htmlFor="newPassword">새 비밀번호 입력</Form.Label>
            <Form.Control type="password" id="newPassword" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="passwordConfirm">
            <Form.Label htmlFor="confirmPassword">비밀번호 확인</Form.Label>
            <Form.Control type="password" id="confirmPassword" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          변경 완료
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordUpdateModal;
