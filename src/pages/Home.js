import { useContext, useEffect, useState } from "react";
import { StateContext } from "../App";
import GruopTeam from "../component/GruopTeam";

const Home = () => {
  const groupList = useContext(StateContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(groupList.filter((it) => it.type === "country"));
  }, [groupList]);

  return (
    <div className="home">
      <div className="title">
        <div>FIFA WORLD CUP</div>
        <div className="qatar">Qat_ar 2022</div>
      </div>
      <GruopTeam groupList={data} />
    </div>
  );
};

export default Home;
