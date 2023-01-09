import React from "react";
import { ImSpinner3 } from "react-icons/im";
import ModalContainer from "./ModalContainer";

export default function ConfirmModal({
  visible,
  title,
  subtitle,
  busy,
  onConfirm,
  onCancel,
}) {
  const commonClass = "px-3 py-1 text white rounded";
  return (
    <ModalContainer visible={visible} ignoreContainer>
      <div className="dark:bg-primary bg-white rounded p-3">
        <h1 className="text-red-400 font-semibold text-lg">{title}</h1>
        <p className="text-secondary dark:text-white text-sm">{subtitle}</p>
        <div className="flex item-center space-x-3 mt-3">
          {busy ? (
            <p className="flex items-center space-x-2">
              <ImSpinner3 className="animate-spin" />
              <span>Please wait</span>
            </p>
          ) : (
            <>
              <button
                onClick={onConfirm}
                type="button"
                className={commonClass + " bg-red-600"}
              >
                Confirm
              </button>
              <button
                onClick={onCancel}
                type="button"
                className={commonClass + " bg-blue-600"}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </ModalContainer>
  );
}
