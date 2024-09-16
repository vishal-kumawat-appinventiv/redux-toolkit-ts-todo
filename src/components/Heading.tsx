import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const Heading = () => {
  const { loading } = useSelector((state: RootState) => state.global);
  return (
    <>
      <h1 className="text-2xl font-bold">Todo List</h1>
      {loading && <p className="text-3xl">Loading...</p>}
    </>
  );
};

export default Heading;
