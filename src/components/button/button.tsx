import IconLoader from '../icons/loader';
import { ButtonProps, ButtonType } from './types';

import './button.css';

const Button = ({ type, text, isLoading, onClick, className }: ButtonProps) => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
    className={`button ${className || ''}`}
    onClick={onClick}
  >
    {isLoading ? (
      <div className="button-loader-wrapper">
        <IconLoader />
      </div>
    ) : (
      text
    )}
  </button>
);

Button.defaultProps = {
  type: ButtonType.BUTTTON,
  text: '',
  isLoading: false,
  onClick: undefined,
  className: '',
};

export default Button;
