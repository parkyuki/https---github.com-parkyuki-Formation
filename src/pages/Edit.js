import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit</h1>
    </div>
  );
};

export default Edit;
