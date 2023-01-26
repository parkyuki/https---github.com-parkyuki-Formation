import React from "react";
import { useNavigate } from "react-router-dom";

const GruopTeam = ({ groupList }) => {
  const navigate = useNavigate();
  return (
    <div className="GroupTeam">
      {groupList.map((it, idx) => (
        <button
          className={[`GroupTeam_team ${it.id}`]}
          key={idx}
          onClick={() => navigate(`/team/${it.id}`)}
        >
          <img src={process.env.PUBLIC_URL + `/flag/${it.id}.png`} alt="flag" />
          {it.teamName}
        </button>
      ))}
    </div>
  );
};

export default GruopTeam;
