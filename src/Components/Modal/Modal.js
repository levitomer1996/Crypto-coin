import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import ModalContext from "../../Context/ModalContext";
import useStyles, { getModalStyle, getWidth } from "./Comps/Modal.style";
import CloseIcon from "@material-ui/icons/Close";
import ContentHandler from "./Comps/ContentHandler";
import {
  Button,
  Modal as bootstrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export default function GeneralModal() {
  const { modalState, setIsModalOpen } = useContext(ModalContext);
  const { isOpen, content, params } = modalState;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    //
    // <bootstrapModal
    //   isOpen={true}
    //   modalClassName="modal-black"
    //   style={{ width: "20%" }}
    // >
    //   <div className="modal-header">
    //     <button
    //       type="button"
    //       className="close"
    //       data-dismiss="modal"
    //       aria-label="Close"
    //     >
    //       <i className="tim-icons icon-simple-remove"></i>
    //     </button>
    //     <h5 className="modal-title">Modal title</h5>
    //   </div>
    //   <ModalBody>
    //     <p>Woohoo, you're reading this text in a modal!</p>
    //   </ModalBody>
    //   <ModalFooter>
    //     <Button color="secondary">Close</Button>
    //     <Button color="primary">Save changes</Button>
    //   </ModalFooter>
    // </bootstrapModal>
    <div></div>
  );
}
