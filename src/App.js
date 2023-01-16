import React, { useReducer, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Team from "./pages/Team";

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
      newState = state.filter((it) => it.id != action.targetId);
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
  return state;
};

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  //CREATE
  const onCreate = (id, name, age, hegiht, position, content) => {
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
      <dispatch.Provider value={{ onCreate, onEdit, onEdit }}>
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
      </dispatch.Provider>
    </StateContext.Provider>
  );
}

export default App;
