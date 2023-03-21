import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddUpdate from "../form/AddUpdate";

const style = {
  position: "absolute",
  top: {
    xs: "50%",
    sm: "50 %",
    md: "50%",
  },
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 400,
    md: 600,
    lg: 700,
  },
  borderRadius: "5px",
  bgcolor: "white",
  border: "1px solid #0000008b",
  boxShadow: 24,
  px: 3,
  pb: 3,
  pt: 2,
};
const CustomModal = ({ open, handleModal, modalState }) => {
  return (
    <Modal
      open={open}
      onClose={() => handleModal(modalState.method, modalState.modalFor)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AddUpdate modalState={modalState} handleModal={handleModal} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
