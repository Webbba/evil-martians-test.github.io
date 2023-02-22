import { Control, Controller, FieldErrors } from 'react-hook-form';
import Input from '../input/input';
import IconEmail from '../icons/email';
import IconPassword from '../icons/password';
import Button from '../button/button';
import { InputType } from '../input/types';
import { ButtonType } from '../button/types';
import {
  emailValidation,
  passwordValidation,
} from '../../hoc/login/validation';
import { FormValues } from '../../hoc/login/types';

import './form.css';

interface LoginFormProps {
  control: Control<FormValues>;
  onSubmit: React.FormEventHandler;
  errors?: FieldErrors<FormValues>;
  requestInProgress?: boolean;
}

const LoginForm = ({
  control,
  onSubmit,
  errors,
  requestInProgress,
}: LoginFormProps) => (
  <form onSubmit={onSubmit} className="login-form">
    <div className="form-row">
      <Controller
        control={control}
        defaultValue=""
        name="email"
        render={({ field: { value, name, onChange } }) => (
          <Input
            name={name}
            value={value}
            placeholder="E-mail"
            error={errors?.email?.message}
            onChange={onChange}
            icon={<IconEmail />}
            valid={emailValidation.test(value)}
          />
        )}
      />
    </div>
    <div className="form-row">
      <Controller
        control={control}
        defaultValue=""
        name="password"
        render={({ field: { value, name, onChange } }) => (
          <Input
            name={name}
            value={value}
            placeholder="Password"
            error={errors?.password?.message}
            type={InputType.PASSWORD}
            onChange={onChange}
            icon={<IconPassword />}
            valid={passwordValidation.test(value)}
          />
        )}
      />
    </div>
    <Button
      type={ButtonType.SUBMIT}
      text="Submit"
      isLoading={requestInProgress}
    />
  </form>
);

LoginForm.defaultProps = {
  errors: undefined,
  requestInProgress: false,
};

export default LoginForm;
