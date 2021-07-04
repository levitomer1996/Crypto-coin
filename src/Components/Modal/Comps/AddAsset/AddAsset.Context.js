import React, { useReducer } from "react";

const AddAssetContext = React.createContext();
const AddAssetReducer = (state, action) => {
  switch (action.type) {
    case "add_input_to_modal":
      console.log(state);
      return {
        ...state,
        inputs: [...state.inputs, { id: state.inputs.length + 1, value: "" }],
      };
    default:
      break;
  }
};

export const AddAssetProvider = ({ children }) => {
  //d = dispatch
  const [addAssetState, d] = useReducer(AddAssetReducer, {
    inputs: [{ id: 1, value: "" }],
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const addInputToModal = () => {
    dispatch("add_input_to_modal");
  };
  return (
    <AddAssetContext.Provider
      value={{
        addAssetState,
        addInputToModal,
      }}
    >
      {children}
    </AddAssetContext.Provider>
  );
};
export default AddAssetContext;
