import { ReactNode } from "react";

export interface ModalInterface {
  modalOpen: boolean,
  // children: ReactNode,
  onClose?: () => void | undefined
}