import Dropdown from "react-bootstrap/Dropdown";

function LanguageDropdown({ setLanguage, language }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {language.charAt(0).toUpperCase() + language.slice(1)}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => setLanguage("javascript")}
          href="#/javascript"
        >
          Javascript
        </Dropdown.Item>

        <Dropdown.Item onClick={() => setLanguage("java")} href="#/java">
          Java
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;
