import { Fragment, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";

/* 추후 models 폴더에 '공고'와 관련된 모든 타입 정의 후 이곳에서의 RecruitState와 RecruitActionType의 타입 정의는 제거하고 import문 통해 타입을 가져와 사용할 계획 */
type RecruitState = "모집 중" | "모집 마감";
type RecruitActionType = "수정하기" | "복제하기" | "삭제하기";

type ActionButtonProps = {
  acceptedApplicantsCount: number;
  applicationDeadline: Date /* api 요청 통해 공고 데이터 리스트 받아온 후, 각 공고 마다 해당 속성을 string 에서 Date으로 변환 필요 */;
  companyRecruitId: string;
  isDropdown?: boolean;
  recruitState: RecruitState;
};

const ActionButtons = ({
  acceptedApplicantsCount,
  applicationDeadline,
  companyRecruitId,
  isDropdown,
  recruitState,
}: ActionButtonProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalConfirmAction, setModalConfirmAction] = useState();

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

  const handleDelete = () => {
    /*  추후 api 연결 후 주석 해제
    if(acceptedApplicantsCount >= 1) {
        setModalContent(
            "수락된 인원이 있으므로 공고를 삭제 할 수 없습니다."
          );
    } else{
        setModalContent(
            "정말 삭제하시겠습니까?"
          );
    }  */
    setShowModal(true);
    /* 추후 구현될 공고 삭제를 위한 API 요청을 보내는 함수를 setModalConfirmAction() 사용해 modalConfirmAction의 변수로 설정 */
  };

  const actionMap: Record<RecruitActionType, () => void> = {
    수정하기: handleEdit,
    복제하기: handleDuplicate,
    삭제하기: handleDelete,
  };

  const performAction = (actionType: RecruitActionType) => {
    const action = actionMap[actionType];
    action();
  };

  const { 수정하기, ...remainingActions } = actionMap;
  const availableActions =
    recruitState === "모집 마감" ? remainingActions : actionMap;

  return (
    <>
      {isDropdown ? (
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
            {(Object.keys(availableActions) as RecruitActionType[]).map(
              (actionType, index) => (
                <Fragment key={actionType}>
                  {index !== 0 && <Dropdown.Divider className="m-0" />}
                  <Dropdown.Item
                    onClick={() => performAction(actionType)}
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
        (Object.keys(availableActions) as RecruitActionType[]).map(
          (actionType) => (
            <Button
              key={actionType}
              onClick={() => performAction(actionType)}
              className="my-4 mx-3"
            >
              {actionType}
            </Button>
          ),
        )
      )}
      {/* 추후 AlertModal 컴포넌트 렌더링하고 showModal과 modalContent 인자로 넘겨줌 */}
    </>
  );
};

export default ActionButtons;
