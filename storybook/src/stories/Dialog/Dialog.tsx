import { Fragment } from 'react';
import { Button } from '../Button/Button';
import './dialog.css';

export type DialogProps = {
  visible: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const Dialog = ({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  children,
  onCancel,
  onConfirm,
}: DialogProps) => {
  if (!visible) return null;

  return (
    <Fragment>
      <div className="fullscreen darkLayer"></div>
      <div className="fullscreen whiteBoxWrapper">
        <div className="whiteBox">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {children}
          {!hideButtons && (
            <div style={{ display: 'flex' }}>
              {cancellable && <Button label={cancelText} onClick={onCancel} />}
              <Button label={confirmText} onClick={onConfirm} />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
};

export default Dialog;
