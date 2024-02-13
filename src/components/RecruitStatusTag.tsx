import Badge from "react-bootstrap/Badge";

type RecruitStatusTagProps = {
  status:
    | "모집 중"
    | "모집 마감"
    | "삭제" /* models 폴더에 status 속성의 type 정의 후 추후 해당 컴포넌트 내 타입 업데이트 예정 */;
};

const RecruitStatusTag = ({ status }: RecruitStatusTagProps) => {
  const getBackgroundColor = (status: string) => {
    switch (status) {
      case "모집 중":
        return "primary";
      case "모집 마감":
        return "danger";
      case "삭제":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <Badge pill bg={getBackgroundColor(status)}>
      {status}
    </Badge>
  );
};

export default RecruitStatusTag;
