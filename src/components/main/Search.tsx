import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const changeSearchInput = () => {
    console.log(searchInput);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeSearchInput();
    }
  };

  return (
    <InputGroup style={{ width: 350 }}>
      <FormControl
        placeholder="어떤 알바를 찾으시나요?"
        style={{ borderRight: "none" }}
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <InputGroup.Text
        onClick={changeSearchInput}
        style={{ backgroundColor: "transparent", cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default Search;
