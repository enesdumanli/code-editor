import "./App.css";

import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import ReplayIcon from "@mui/icons-material/Replay";

import LanguageDropdown from "./LanguageDropdown";

function App() {
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

  const languageRef = useRef(null);

  languageRef.current = language;

  function handleEditorChange(value) {
    if (languageRef.current === "javascript") {
      setCodeTextJavascript(value);
    } else {
      setCodeTextJava(value);
    }
  }

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
        height={"40vh"}
        theme="vs-dark"
        language={language}
        value={language === "javascript" ? codeTextJavascript : codeTextJava}
        onChange={handleEditorChange}
      />

      <div className="footer">
        <div className="footer-run">
          {"Output"}

          <button className="footer-run__button">Run</button>
        </div>

        <div className={"footer-console"}>{"Click run to see your output"}</div>
      </div>
    </>
  );
}

export default App;
