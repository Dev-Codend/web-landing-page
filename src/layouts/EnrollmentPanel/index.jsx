import Modal from '../../components/Modal';
import EnrollmentForm from '../../components/EnrollmentForm';

export default function EnrollmentPanel({ isMobile, open, onClose, onOpenTerms, form }) {
  const content = (
    <div className="enrollment-panel__surface">
      <div className="enrollment-panel__content">
        <div className="enrollment-panel__intro">
          <div className="enrollment-panel__heading">
            <h2 id="enrollment-title">Inscríbete aquí</h2>
            <button type="button" className="enrollment-panel__close" aria-label="Cerrar formulario" onClick={onClose}>x</button>
          </div>
          <p>No esperes más para comenzar el camino hacia tus sueños, llena el formulario y pronto nos comunicaremos contigo.</p>
        </div>
        <div className="enrollment-panel__form">
          <EnrollmentForm {...form} onOpenTerms={onOpenTerms} />
        </div>
      </div>
    </div>
  );

  return isMobile ? (
    <Modal className="enrollment-panel" open={open} onClose={onClose} labelledBy="enrollment-title">{content}</Modal>
  ) : (
    <aside className="enrollment-panel" aria-labelledby="enrollment-title">{content}</aside>
  );
}
