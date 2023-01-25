import React from "react";

const GruopTeam = ({ groupList }) => {
  return (
    <div className="GroupTeam">
      {groupList.map((it, idx) => (
        <div className={[`GroupTeam_team ${it.id}`]} key={idx}>
          {it.teamName}
        </div>
      ))}
    </div>
  );
};

export default GruopTeam;
