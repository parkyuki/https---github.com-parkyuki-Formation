import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DispatchContext } from "../App";
import MyButton from "./MyButton";
import Squad from "./Squad";

const PlayerList = ({ List }) => {
  const { onRemove } = useContext(DispatchContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(List.id);
      navigate("/", { replace: true });
    }
  };
  return (
    <div className="PlayerList">
      <div className="country">
        <img
          className="TeamFlag"
          src={process.env.PUBLIC_URL + `/flag/${id}.png`}
          alt="Teamflag"
        />
        <MyButton onClick={goEdit} type={"edit"} text={"수정"} />
        <MyButton onClick={handleRemove} type={"remove"} text={"삭제"} />
      </div>
      <Squad List={List} />
    </div>
  );
};

export default PlayerList;
