import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../App";
import LineUp from "../component/LineUp";
import PlayerList from "../component/PlayerList";

const Team = () => {
  const groupList = useContext(StateContext);
  const { id } = useParams();

  const List = groupList.filter((it) => it.value === id);

  return (
    <div className={["Team", `Team_${id}`].join(" ")}>
      <LineUp List={List} />
      <PlayerList List={List} />
    </div>
  );
};

export default Team;
