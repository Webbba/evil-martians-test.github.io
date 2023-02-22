export enum ButtonType {
  BUTTTON = 'button',
  SUBMIT = 'submit',
}

export interface ButtonProps {
  type?: ButtonType;
  text?: string;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
}
