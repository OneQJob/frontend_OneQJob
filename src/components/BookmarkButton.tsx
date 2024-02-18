import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

interface BookmarkButtonProps {
  isBookmarked: boolean;
  toggleBookmark: () => void;
  size?: "sm" | "md" | "lg";
}

const BookmarkButton = ({
  isBookmarked,
  toggleBookmark,
  size = "md",
}: BookmarkButtonProps) => {
  const btnSizeMap = { sm: 6, md: 5, lg: 4 };

  return (
    <button
      onClick={toggleBookmark}
      className={`btn fs-${btnSizeMap[size]} p-0 border-0 bg-transparent d-inline-block lh-1`}
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
