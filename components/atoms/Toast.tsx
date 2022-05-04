import React from 'react'
import { ToastHeader, ToastBody, ToastContainer, Toast } from 'react-bootstrap';

type PropTypes = {
    title?: string;
    subTitle?: string;
    content: string;
    autohide?: boolean;
    delay?: number;
    show: boolean;
    onClose: () => void;
}

export default function CustomToast(props: PropTypes) {
  const {
      title = 'Success',
      subTitle,
      content,
      autohide = true,
      delay = 3000,
      show,
      onClose
  } = props;
  return (
    <ToastContainer position='top-center'>
        <Toast autohide={autohide} delay={delay} show={show} onClose={onClose}>
            <ToastHeader>
                <strong className="me-auto">{title}</strong>
                <small>{subTitle}</small>
            </ToastHeader>
            <ToastBody> {content} </ToastBody>
        </Toast>
    </ToastContainer>
  )
}
