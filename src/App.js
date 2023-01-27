import "./styles.css";
import { useState, useRef } from "react";
export default function App() {
  const [iptValue, setIptValue] = useState("");
  const reg = useRef("");
  const [isFullScreen, setFullScreen] = useState(false);
  console.log(`ASKDHJSDJSHDJSD`);
  const setInput = () => {
    console.log(reg.current.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={iptValue} onChange={(e) => setIptValue(e.target.value)} />
      <input ref={reg} />

      <button
        style={iptValue != "" ? { backgroundColor: "red" } : {}}
        onClick={() => setInput()}
      >
        Click me
      </button>
    </div>
  );
}
