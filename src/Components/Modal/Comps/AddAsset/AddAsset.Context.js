import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const AddAssetContext = React.createContext();
const AddAssetReducer = (state, action) => {
  switch (action.type) {
    case "add_input_to_modal":
      return {
        ...state,
        inputs: [...state.inputs, { id: uuidv4(), value: "" }],
      };
    case "remove_input_to_modal":
      var list = state.inputs;
      var removeIndex = state.inputs
        .map(function (item) {
          return item.id;
        })
        .indexOf(action.payload);
      list.splice(removeIndex, 1);
      return { inputs: list };

    default:
      break;
  }
};

export const AddAssetProvider = ({ children }) => {
  //d = dispatch
  const [addAssetState, d] = useReducer(AddAssetReducer, {
    inputs: [{ id: uuidv4(), value: "" }],
    coinList: [],
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const addInputToModal = () => {
    dispatch("add_input_to_modal");
  };
  const removeInputFromModal = (payload) => {
    dispatch("remove_input_to_modal", payload);
  };

  return (
    <AddAssetContext.Provider
      value={{
        addAssetState,
        addInputToModal,
        removeInputFromModal,
      }}
    >
      {children}
    </AddAssetContext.Provider>
  );
};
export default AddAssetContext;
