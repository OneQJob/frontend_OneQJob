import { Button, Modal, Image } from "react-bootstrap";

interface ApplicationInfoType {
  name: string;
  gender: string;
  age: string;
  phone: string;
  message: string;
  profileImage?: string;
}

interface ModalProps {
  applicationInfo: ApplicationInfoType;
  show: boolean;
  toggleModal: () => void;
}

const WokerApplicationModal = ({
  show,
  toggleModal,
  applicationInfo,
}: ModalProps) => {
  const { name, gender, age, phone, message, profileImage } = applicationInfo;
  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>지원자 정보</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {profileImage && (
          <Image
            src={profileImage}
            roundedCircle
            style={{
              width: "50px",
              height: "50px",
              marginBottom: "8px",
              border: "1px solid #dbdbdb",
            }}
          />
        )}
        <p>
          <strong>이름:</strong> {name}
        </p>
        <p>
          <strong>성별:</strong> {gender}
        </p>
        <p>
          <strong>나이:</strong> {age}
        </p>
        <p>
          <strong>전화번호:</strong> {phone}
        </p>
        <p>
          <strong>전달 메세지:</strong> {message}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={toggleModal}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WokerApplicationModal;
