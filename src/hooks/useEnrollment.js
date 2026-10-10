import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const initialValues = {
  firstName: '', lastName: '', document: '', email: '', phone: '', acceptedTerms: true,
};

export default function useEnrollment(onSuccess) {
  const [values, setValues] = useState(initialValues);
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const pending = useRef(false);

  function change(event) {
    const { name, type, checked, value } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  async function submit(event) {
    event.preventDefault();
    setAttempted(true);
    if (!event.currentTarget.reportValidity() || pending.current) return;
    pending.current = true;
    setSubmitting(true);
    onSuccess();
    try {
      await Swal.fire({
        // The page hides its scrollbar, so no extra spacing is needed.
        scrollbarPadding: false,
        icon: 'success',
        title: '¡Inscripción exitosa!',
        text: 'El formulario se completó correctamente.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#93652B',
        customClass: { popup: 'enrollment-alert', container: 'enrollment-alert-container' },
      });
      setValues(initialValues);
      setAttempted(false);
    } finally {
      pending.current = false;
      setSubmitting(false);
    }
  }

  return { values, attempted, submitting, change, submit };
}
