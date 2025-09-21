import { useContext } from "react";
import { Context } from "../../context/Context";

const Random = () => {
  const { value1, value2 } = useContext(Context);

  return (
    <div>
      <h1>Random</h1>
      <h2>{value1}</h2>
      <h2>{value2}</h2>
    </div>
  );
};

export default Random;
