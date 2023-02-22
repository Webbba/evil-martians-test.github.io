import { InputProps, InputType } from './types';
import IconValid from '../icons/valid';
import './input.css';

const Input = ({
  name,
  placeholder,
  value,
  onChange,
  error,
  type,
  icon,
  valid,
}: InputProps) => (
  <>
    <label htmlFor={`input-${name}`} className="input-label">
      <div
        className={`input-placeholder ${
          value ? 'input-placeholder-small' : ''
        }`}
      >
        {placeholder}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`input ${error ? 'input-error' : ''} ${
          value ? 'input-filled' : ''
        }`}
      />
      {icon && (
        <div className="icon-wrapper">{valid ? <IconValid /> : icon}</div>
      )}
      {type === InputType.PASSWORD && value && !valid && (
        <div className="input-password-hint">
          <div className="input-password-hint-title">Password tip</div>
          <div className="input-password-hint-text">
            Please use at least 8 characters, numbers and special symbols
          </div>
        </div>
      )}
    </label>
    {error && <div className="input-error-text">{error}</div>}
  </>
);

Input.defaultProps = {
  value: undefined,
  error: undefined,
  type: InputType.TEXT,
  icon: undefined,
  valid: false,
};

export default Input;
