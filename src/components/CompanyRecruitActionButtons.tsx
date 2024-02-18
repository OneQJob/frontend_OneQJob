import { Fragment, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import AlertModal from "@/components/AlertModal";

interface ActionButtonProps {
  applicationDeadline: Date;
  companyRecruitId: string;
  isDropdown?: boolean;
  recruitState: "모집 중" | "모집 마감";
}

const CompanyRecruitActionButtons = ({
  applicationDeadline,
  companyRecruitId,
  isDropdown,
  recruitState,
}: ActionButtonProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleEdit = () => {
    const differenceInDays = moment(applicationDeadline).diff(moment(), "days");
    if (differenceInDays <= 3) {
      setModalContent("마감 일자 3일 전에는 수정할 수 없습니다.");
      setShowModal(true);
    } else {
      navigate(`companyRecruit/edit/${companyRecruitId}`);
    }
  };

  const handleDuplicate = () => {
    navigate(`companyRecruit/copy/${companyRecruitId}`);
  };

  const availableActions =
    recruitState === "모집 중"
      ? { 수정하기: handleEdit, 복제하기: handleDuplicate }
      : { 복제하기: handleDuplicate };

  return (
    <>
      {isDropdown && Object.keys(availableActions).length > 1 ? (
        <Dropdown className="m-3">
          <Dropdown.Toggle variant="primary" style={{ width: "90px" }}>
            더보기
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="p-0"
            style={{
              border: "1px solid #ced4da",
              minWidth: "fit-content",
              width: "90px",
            }}
          >
            {Object.entries(availableActions).map(
              ([actionType, action], index) => (
                <Fragment key={actionType}>
                  {index !== 0 && <Dropdown.Divider className="m-0" />}
                  <Dropdown.Item
                    onClick={action}
                    className="p-2"
                    style={{ textAlign: "center" }}
                  >
                    {actionType}
                  </Dropdown.Item>
                </Fragment>
              ),
            )}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        Object.entries(availableActions).map(([actionType, action]) => (
          <Button key={actionType} onClick={action} className="my-4 mx-3">
            {actionType}
          </Button>
        ))
      )}
      <AlertModal
        message={modalContent}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default CompanyRecruitActionButtons;
