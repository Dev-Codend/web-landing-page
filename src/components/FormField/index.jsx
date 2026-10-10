export default function FormField({ name, label, error, value, onChange, ...attributes }) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={name}>
        <input
          className="form-field__input"
          id={name}
          name={name}
          placeholder={label}
          aria-label={label}
          aria-describedby={`${name}-error`}
          value={value}
          onChange={onChange}
          required
          {...attributes}
        />
        <span className="form-field__caption">{label}</span>
        <span className="form-field__error" id={`${name}-error`}>{error}</span>
      </label>
    </div>
  );
}
