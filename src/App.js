import React, { useReducer, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Team from "./pages/Team";

const ko = [
  { type: "country", teamName: "한국", id: "ko" },

  { value: "1", position: "gk", name: "김승규" },
  { value: "1", position: "gk", name: "조현우" },
  { value: "2", position: "df", name: "김민재" },
  { value: "2", position: "df", name: "김승규" },
  { value: "3", position: "mf", name: "이강인" },
  { value: "4", position: "fw", name: "손흥민" },
];
const po = [
  { type: "country", teamName: "포르투갈", id: "po" },
  { value: "1", position: "gk", name: "김승규" },
  { value: "1", position: "gk", name: "조현우" },
  { value: "2", position: "df", name: "김민재" },
  { value: "2", position: "df", name: "김승규" },
  { value: "3", position: "mf", name: "이강인" },
  { value: "4", position: "fw", name: "손흥민" },
];
let Group = [];
Group = ko.concat(po);

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, Group);

  const dataId = useRef(0);

  //CREATE
  const onCreate = (name, age, hegiht, position, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        name,
        age,
        hegiht,
        position,
        content,
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (targetId, name, age, hegiht, position, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        name,
        age,
        hegiht,
        position,
        content,
      },
    });
  };

  return (
    <StateContext.Provider value={data}>
      <DispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            {/* <img src={process.env.PUBLIC_URL + `/assets/Uniform.png`} /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit:id" element={<Edit />} />
              <Route path="/team:id" element={<Team />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
