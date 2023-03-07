import "./App.css";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import ReplayIcon from "@mui/icons-material/Replay";
function App() {
  const languageRef = useRef(null);
  const initialJavascript = `
  var returnmax = function(nums) {

    // Insert your code here
    }; 
    
  `;

  const initialJava = `
  class Solution {
    public int returnmax(int[] nums) {
    
    // Insert your code here
    }
    }
  `;

  const [language, setLanguage] = useState("javascript");
  const [codeTextJavascript, setCodeTextJavascript] =
    useState(initialJavascript);
  const [codeTextJava, setCodeTextJava] = useState(initialJava);

  function handleEditorChange(value) {
    console.log("language inside function", language);
    if (languageRef.current === "javascript") {
      setCodeTextJavascript(value);
    } else {
      setCodeTextJava(value);
    }
  }
  console.log("state language:", language);
  languageRef.current = language;
  console.log("ref language:", languageRef.current);

  return (
    <>
      <div className="header">
        <LanguageDropdown setLanguage={setLanguage} language={language} />
        <button
          className="reset-button"
          onClick={() => {
            setCodeTextJavascript(initialJavascript);
            setCodeTextJava(initialJava);
          }}
        >
          <ReplayIcon />
          {"Reset to Initial Code"}
        </button>
      </div>
      <Editor
        height={"50vh"}
        theme="vs-dark"
        language={language}
        value={language === "javascript" ? codeTextJavascript : codeTextJava}
        onChange={handleEditorChange}
      />
      <div className="footer">
        <div className="footer-run">
          {"Output"}
          <button className="footer-run__button" disabled={true}>
            Run
          </button>
        </div>
        <div className={"footer-console"}>{"Click run to see your output"}</div>
      </div>
    </>
  );
}

export default App;
