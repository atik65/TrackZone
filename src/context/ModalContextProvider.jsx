import React, { createContext, useState } from "react";
import CustomModal from "../components/shared/customModal/CustomModal";
import { deepClone } from "../utils/objectUtil";

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [modalState, setModalState] = useState({
    state: false,
    method: "create",
    modalFor: "clock",
    formData: {},
  });

  const modalClose = () => {
    const clonedState = deepClone(modalState);
    modalState.state = !modalState.state;

    setModalState(clonedState);
  };

  const handleModal = (method, modalFor, prevData = {}) => {
    const clonedState = deepClone(modalState);

    if (modalFor == "clock") {
      if (method == "create") {
        clonedState.method = "create";
        clonedState.modalFor = "clock";
        clonedState.state = !modalState.state;
        clonedState.formData = {
          clockTitle: "",
          timeZone: "SYSTEM TIME",
        };
      } else if (method == "update") {
        clonedState.method = "update";
        clonedState.modalFor = "clock";
        clonedState.state = !modalState.state;
        clonedState.formData = {
          ...prevData,
        };
      }
    } else if (modalFor == "meeting") {
      if (method == "create") {
        clonedState.method = "create";
        clonedState.modalFor = "meeting";
        clonedState.state = !modalState.state;
        clonedState.formData = {
          meetingTitle: "",
          meetingDate: new Date().toISOString(),
          meetingTime: new Date().toISOString(),
        };
      } else if (method == "update") {
        clonedState.method = "update";
        clonedState.modalFor = "meeting";
        clonedState.state = !modalState.state;
        clonedState.formData = {
          ...prevData,
        };
      }
    }

    setModalState(clonedState);
  };

  return (
    <ModalContext.Provider
      value={{
        handleModal: handleModal,
        modalClose: modalClose,
        modalState: modalState,
      }}
    >
      {props.children}

      <CustomModal
        modalState={modalState}
        open={modalState.state}
        handleModal={handleModal}
      />
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
