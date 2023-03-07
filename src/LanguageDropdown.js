import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function LanguageDropdown({ setLanguage }) {
  const [dropdownLanguage, setDropdownLanguage] = useState("Javascript");

  return (
    <Dropdown onSelect={setDropdownLanguage}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {dropdownLanguage}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          eventKey={"Javascript"}
          onClick={() => setLanguage("Javascript")}
          href="#/action-1"
        >
          javascript
        </Dropdown.Item>
        <Dropdown.Item
          eventKey={"Java"}
          onClick={() => setLanguage("Java")}
          href="#/action-2"
        >
          java
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;
