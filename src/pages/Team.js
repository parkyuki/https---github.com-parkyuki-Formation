import { useParams } from "react-router-dom";

const Team = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Team</h1>
    </div>
  );
};

export default Team;
