import { useEffect, useRef } from 'react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

export default function Modal({ open, onClose, className, labelledBy, children }) {
  const ref = useRef(null);
  useBodyScrollLock(open);

  useEffect(() => {
    const dialog = ref.current;
    if (!open) return;
    dialog.showModal();
    return () => dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-labelledby={labelledBy}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      {children}
    </dialog>
  );
}
