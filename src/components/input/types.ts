import React from 'react';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface InputProps {
  name: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: InputType;
  icon?: React.ReactNode;
  valid?: boolean;
}
