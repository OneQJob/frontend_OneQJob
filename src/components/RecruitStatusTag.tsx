import Badge from "react-bootstrap/Badge";

type RecruitStatusTagProps = {
  status:
    | "모집 중"
    | "모집 마감" /* models 폴더에 status 속성의 type 정의 후 추후 해당 컴포넌트 내 타입 업데이트 예정 */;
};

const RecruitStatusTag = ({ status }: RecruitStatusTagProps) => {
  return (
    <Badge pill bg={status === "모집 중" ? "primary" : "danger"}>
      {status}
    </Badge>
  );
};

export default RecruitStatusTag;
