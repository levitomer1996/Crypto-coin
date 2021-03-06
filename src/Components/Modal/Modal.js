import React, { useContext, useState } from "react";
import ModalContext from "../../Context/ModalContext";
import ContentHandler from "./Comps/ContentHandler";
import { Modal } from "reactstrap";
import { IconButton } from "@material-ui/core";
import { Icon } from "@iconify/react";
import roundClose from "@iconify-icons/ic/round-close";

import "./Comps/Modal.scss";

export default function GeneralModal() {
  const { modalState, setIsModalOpen, closeModal } = useContext(ModalContext);
  const { isOpen, content, params } = modalState;
  return (
    <Modal
      isOpen={isOpen}
      modalClassName="modal-black"
      toggle={setIsModalOpen}
      scrollable={true}
    >
      <div className="general_modal">
        <div className={"close-button-div"}>
          <IconButton onClick={setIsModalOpen}>
            <Icon
              icon={roundClose}
              style={{ width: 20, height: 20, color: "#823c59" }}
            />
          </IconButton>
        </div>
        <ContentHandler content={content} />
      </div>
    </Modal>
  );
}
