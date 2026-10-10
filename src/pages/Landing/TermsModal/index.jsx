import Modal from '../../../components/Modal';
import { terms } from '../content';
import closeDesktop from '../../../assets/close-icon.svg';
import closeMobile from '../../../assets/close-icon2.svg';

export default function TermsModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} className="terms-modal" labelledBy="terms-title">
      <div className="terms-modal__panel">
        <div className="terms-modal__content">
          <div className="terms-modal__text">
            <button type="button" className="terms-modal__close" aria-label="Cerrar términos y condiciones" onClick={onClose}>
              <img className="terms-modal__close-icon terms-modal__close-icon--desktop" src={closeDesktop} alt="" />
              <img className="terms-modal__close-icon terms-modal__close-icon--mobile" src={closeMobile} alt="" />
            </button>
            <p id="terms-title">Términos y condiciones</p>
            <span>
              {terms[0]}
              <strong className="terms-modal__subtitle">Términos y condiciones</strong>
              {terms[1]}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
