import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <div
      className={cn("fixed inset-0 bg-black/30 invisible z-[999]", {
        visible: isOpen,
      })}
      onClick={onClose}
    >
      <div className="bg-white">{children}</div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
