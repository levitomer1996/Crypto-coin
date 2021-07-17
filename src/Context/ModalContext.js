import React, { useReducer } from "react";

const ModalContext = React.createContext();
const ModalReducer = (state, action) => {
  switch (action.type) {
    case "set_is_open":
      return {
        ...state,
        isOpen: action.payload.isOpen,
        content: action.payload.content,
        params: action.payload.params,
      };
    case "close_modal":
      return {
        ...state,
        isOpen: null,
        content: null,
        params: null,
      };

    case "set_modal_content":
      return {
        ...state,
        content: action.payload.content,
        params: action.payload.params,
      };
    default:
      break;
  }
};

export const ModalProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
    content: null,
    params: {},
  });

  const setIsModalOpen = (content, params) => {
    modalState.isOpen
      ? dispatch({
          type: "set_is_open",
          payload: { isOpen: false, content: null, params: null },
        })
      : dispatch({
          type: "set_is_open",
          payload: { isOpen: true, content, params },
        });
  };

  const setModalContent = (content, params) => {
    dispatch({ type: "set_modal_content", payload: { content, params } });
  };

  const closeModal = () => {
    dispatch({ type: "close_modal" });
  };
  return (
    <ModalContext.Provider
      value={{
        modalState,
        setIsModalOpen,
        setModalContent,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
