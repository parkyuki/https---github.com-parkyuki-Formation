import React from "react";
import { useState } from "react";

const formation = [
  { value: "442", fw: "2", mf: "4", df: "4", name: "4-4-2" },
  { value: "433", fw: "3", mf: "3", df: "4", name: "4-3-3" },
];

const LineUp = ({ List }) => {
  const [tactic, setTactic] = useState("442");
  const num = [...tactic];
  const df = parseInt(num[0]);
  const mf = parseInt(num[1]);
  const fw = parseInt(num[2]);

  return (
    <div className="lineUp">
      <div>
        <select
          onChange={(e) => setTactic(e.target.value)}
          value={tactic.value}
        >
          {formation.map((it, idx) => (
            <option key={idx} value={it.value}>
              {it.name}
            </option>
          ))}
          ;
        </select>
      </div>
      <div className="fw">
        <div>
          <select>
            <option>손흥민</option>
          </select>
          <select>
            <option>손흥민</option>
          </select>
        </div>
      </div>
      <div className="mf">
        <div>
          <select>
            <option>손흥민</option>
          </select>
          <select>
            <option>손흥민</option>
          </select>
          <select>
            <option>손흥민</option>
          </select>
          <select>
            <option>손흥민</option>
          </select>
        </div>
      </div>
      <div className="df">
        <div>
          <select>
            <option>손흥민</option>
          </select>
          <select>
            <option>손흥민</option>
          </select>
          <select>
            <option>손흥민</option>
          </select>
          <select>
            <option>손흥민</option>
          </select>
        </div>
      </div>
      <div className="gk">
        <div>
          <select>
            <option>손흥민</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LineUp;
