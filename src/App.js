import React, { useReducer, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Team from "./pages/Team";

const ko = [
  { type: "country", teamName: "한국", id: "ko" },

  { value: "ko", position: "gk", name: "김승규" },
  { value: "ko", position: "gk", name: "조현우" },
  { value: "ko", position: "df", name: "김민재" },
  { value: "ko", position: "df", name: "김영권" },
  { value: "ko", position: "mf", name: "이강인" },
  { value: "ko", position: "fw", name: "손흥민" },
];
const po = [
  { type: "country", teamName: "포르투갈", id: "po" },
  { value: "po", position: "gk", name: "김승규" },
  { value: "po", position: "gk", name: "조현우" },
  { value: "po", position: "df", name: "김민재" },
  { value: "po", position: "df", name: "김승규" },
  { value: "po", position: "mf", name: "이강인" },
  { value: "po", position: "fw", name: "손흥민" },
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/team/:id" element={<Team />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
