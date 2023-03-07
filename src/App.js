import "./App.css";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageDropdown from "./LanguageDropdown";

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

  const [language, setLanguage] = useState("Javascript");
  const [codeTextJavascript, setCodeTextJavascript] =
    useState(initialJavascript);
  const [codeTextJava, setCodeTextJava] = useState(initialJava);

  function handleEditorChange(value) {
    console.log("language inside function", language);
    if (languageRef.current === "Javascript") {
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
        <LanguageDropdown setLanguage={setLanguage} />
        <button
          onClick={() => {
            setCodeTextJavascript(initialJavascript);
            setCodeTextJava(initialJava);
          }}
        >
          reset to initial view
        </button>
      </div>
      <Editor
        height="390vh"
        theme="vs-dark"
        language={language}
        value={language === "Javascript" ? codeTextJavascript : codeTextJava}
        onChange={handleEditorChange}
      />
    </>
  );
}

export default App;
