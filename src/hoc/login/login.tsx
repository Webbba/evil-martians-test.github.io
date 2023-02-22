import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/form';
import { emailValidation, passwordValidation } from './validation';
import postData from '../../hooks/use-fetch';
import ajvResolver from './resolver';
import { FormValues } from './types';

import ROUTES from '../../routes';

import './login.css';

const schema = {
  properties: {
    email: {
      format: 'email',
      type: 'string',
      regexp: emailValidation.toString(),
      errorMessage: 'E-mail must be string on format example@example.com',
    },
    password: {
      minLength: 1,
      type: 'string',
      regexp: passwordValidation.toString(),
      errorMessage:
        'Password must contain 8 characters, numbers and special symbols',
    },
  },
  required: ['email', 'password'],
  type: 'object',
};

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
      email: '',
    },
    resolver: ajvResolver(schema),
  });

  const [requestInProgress, setRequestInProgress] = useState(false);

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values: FormValues) => {
    setRequestInProgress(true);

    const response = await postData(values);

    localStorage.setItem('accessToken', JSON.stringify(response));

    setTimeout(() => {
      setRequestInProgress(false);
      navigate(ROUTES.CONGRATS);
    }, 1000);
  });

  return (
    <div className="login">
      <Header />
      <div className="login-content">
        <div className="form-wrapper">
          <div className="login-title">Login</div>
          <div className="login-description">
            Enter your e-mail and password
          </div>
          <LoginForm
            control={control}
            errors={errors}
            onSubmit={onSubmit}
            requestInProgress={requestInProgress}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
