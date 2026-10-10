import FormField from '../FormField';

const fields = [
  { name: 'firstName', label: 'Nombres', error: 'Por favor, ingresa un Nombre válido', autoComplete: 'given-name', minLength: 2, pattern: '.*\\S.*' },
  { name: 'lastName', label: 'Apellidos', error: 'Por favor, ingresa un Apellido válido', autoComplete: 'family-name', minLength: 2, pattern: '.*\\S.*' },
  { name: 'document', label: 'DNI o carnet de extranjería', error: 'Por favor, ingresa un DNI válido', minLength: 8, maxLength: 12, pattern: '[A-Za-z0-9]{8,12}' },
  { name: 'email', label: 'Correo Electrónico', error: 'Por favor, ingresa un correo electrónico válido', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Celular', error: 'Por favor, ingresa un Numero válido', type: 'tel', autoComplete: 'tel', pattern: '[+0-9][0-9 ]{5,19}' },
];

export default function EnrollmentForm({ values, attempted, submitting, change, submit, onOpenTerms }) {
  return (
    <form className={`enrollment-form${attempted ? ' enrollment-form--attempted' : ''}`} onSubmit={submit} noValidate>
      {fields.map((field) => <FormField key={field.name} {...field} value={values[field.name]} onChange={change} />)}
      <div className="enrollment-form__terms" data-tooltip="Por favor, dale check a esta opción para continuar">
        <span className="enrollment-form__checkbox">
          <input id="acceptedTerms" name="acceptedTerms" type="checkbox" checked={values.acceptedTerms} onChange={change} required />
          <label htmlFor="acceptedTerms"><span className="u-sr-only">Acepto Términos y Condiciones</span></label>
        </span>
        <p className="enrollment-form__terms-text">
          Acepto&nbsp;
          <button type="button" className="enrollment-form__terms-link" onClick={onOpenTerms}>Términos y Condiciones</button>
        </p>
      </div>
      <div className="enrollment-form__actions">
        <button className="enrollment-form__submit" type="submit" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Enviar'}
        </button>
      </div>
    </form>
  );
}
