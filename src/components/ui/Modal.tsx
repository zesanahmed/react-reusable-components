import { useRef, MouseEvent, createContext, useContext } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const ModalContext = createContext<ModalContextType | null>(null);
type ModalContextType = {
  onClose: () => void;
};
type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
type TCloseButton = {
  children?: React.ReactNode;
};

type THeader = TCloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-black/30 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md p-4"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as HTMLElement
  );
};
const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as ModalContextType;

  return (
    <button className="ml-auto" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
    </button>
  );
};
const ModalHeader = ({ children }: THeader) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      {children}
    </div>
  );
};
Modal.Header = ModalHeader;
Modal.CloseButton = CloseButton;

export default Modal;
