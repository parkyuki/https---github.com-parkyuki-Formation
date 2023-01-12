import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3>HI</h3>
        <img src={process.env.PUBLIC_URL + `/assets/Uniform.png`} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit:id" element={<Edit />} />
          <Route path="/team:id" element={<Team />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
