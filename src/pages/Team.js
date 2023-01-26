import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../App";
import LineUp from "../component/LineUp";

const Team = () => {
  const groupList = useContext(StateContext);
  const { id } = useParams();

  const List = groupList.filter((it) => it.value === id);

  return (
    <div>
      <LineUp List={List} />
    </div>
  );
};

export default Team;
