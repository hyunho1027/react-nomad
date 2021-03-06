import { useState, useEffect } from "react";

function Hello() {
useEffect(() => {
  console.log("hi");
  return () => {console.log("bye")}
}, []);
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
