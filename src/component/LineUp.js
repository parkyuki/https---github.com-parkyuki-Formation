import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const formation = [
  { value: "442", name: "4-4-2" },
  { value: "343", name: "3-4-3" },
];

const LineUp = ({ List }) => {
  const { id } = useParams();
  const [tactic, setTactic] = useState("442");
  const num = [...tactic];
  const df = parseInt(num[0]);
  const mf = parseInt(num[1]);
  const fw = parseInt(num[2]);

  const dfPlayer = List.filter((it) => it.position === "df");
  const mfPlayer = List.filter((it) => it.position === "mf");
  const fwPlayer = List.filter((it) => it.position === "fw");
  const gkPlayer = List.filter((it) => it.position === "gk");

  const dfComp = () => {
    let arr = [];
    for (let i = 0; i < df; i++) {
      arr.push(
        <div className="player">
          <img
            className={`${id}`}
            src={process.env.PUBLIC_URL + `/assets/Uniformm.png`}
          />
          <select>
            {dfPlayer.map((it) => (
              <option key={it.value} value={it.position}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return arr;
  };
  const mfComp = () => {
    let arr = [];
    for (let i = 0; i < mf; i++) {
      arr.push(
        <div className="player">
          <img
            className={`${id}`}
            src={process.env.PUBLIC_URL + `/assets/Uniformm.png`}
          />
          <select>
            {mfPlayer.map((it) => (
              <option key={it.value} value={it.position}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return arr;
  };
  const fwComp = () => {
    let arr = [];
    for (let i = 0; i < fw; i++) {
      arr.push(
        <div className="player">
          <img
            className={`${id}`}
            src={process.env.PUBLIC_URL + `/assets/Uniformm.png`}
          />
          <select>
            {fwPlayer.map((it) => (
              <option key={it.value} value={it.position}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return arr;
  };
  const gKComp = () => {
    return (
      <div className="player">
        <img
          className={`${id}`}
          src={process.env.PUBLIC_URL + `/assets/Uniformm.png`}
        />
        <select>
          {gkPlayer.map((it) => (
            <option key={it.value} value={it.position}>
              {it.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="lineUp">
      <div className="control">
        <Header />
        <select
          onChange={(e) => setTactic(e.target.value)}
          value={tactic.value}
        >
          {formation.map((it, idx) => (
            <option key={idx} value={it.value}>
              {it.name}
            </option>
          ))}
        </select>
      </div>
      <img
        className="field"
        src={process.env.PUBLIC_URL + `/assets/field.png`}
      />
      <div className="starting">
        <div className="fw">{fwComp()}</div>
        <div className="mf">{mfComp()}</div>
        <div className="df">{dfComp()}</div>
        <div className="gk">{gKComp()}</div>
      </div>
    </div>
  );
};

export default LineUp;
