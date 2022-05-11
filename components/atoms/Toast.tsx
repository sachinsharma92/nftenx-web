import React, { useCallback, useEffect, useState } from "react";
import { ToastHeader, ToastBody, ToastContainer, Toast } from "react-bootstrap";

type PropTypes = {
  title?: string;
  subTitle?: string;
  content: string;
  autohide?: boolean;
  delay?: number;
  show: boolean;
  onClose: () => void;
};

export default function CustomToast(props: PropTypes) {
  const {
    title = "Success",
    subTitle,
    content,
    autohide = true,
    delay = 3000,
    show,
    onClose,
  } = props;

  useEffect(() => {
    let timer = setTimeout(() => {
      onClose();
    }, delay);
    return () => {
        clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="z-50 absolute top-7 left-1/2 -translate-x-1/2 p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
      role="alert"
    >
      <span className="font-medium">{title}</span> {content}
    </div>
  );
}
