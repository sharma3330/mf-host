import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "remote/Button";

const App = () => (
  <div className="container">
    <div>Name: mf-host</div>
    <div>Framework: react-19</div>
    <Button label="Click ON HOST 🔥" color="green" initialCount={5} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);