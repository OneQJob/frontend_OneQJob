import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

type BookmarkButtonProps = {
  isBookmarked: boolean;
  toggleBookmark: () => void;
  size?: "sm" | "md" | "lg";
};

const BookmarkButton = ({
  isBookmarked,
  toggleBookmark,
  size = "md",
}: BookmarkButtonProps) => {
  let btnSize;
  if (size === "sm") {
    btnSize = 6;
  } else if (size === "md") {
    btnSize = 5;
  } else {
    btnSize = 4;
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`btn fs-${btnSize} p-0 border-0 bg-transparent d-inline-block lh-1`}
    >
      {isBookmarked ? (
        <FontAwesomeIcon icon={solidStar} />
      ) : (
        <FontAwesomeIcon icon={regularStar} color="lightgray" />
      )}
    </button>
  );
};

export default BookmarkButton;
