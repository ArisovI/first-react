import { Context } from "./Context";

const ContextProvider = (props) => {
  return <Context.Provider value={props.value}>
    {props.children}
  </Context.Provider>;
};

export default ContextProvider;
