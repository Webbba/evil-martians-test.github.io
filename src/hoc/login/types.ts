import { FieldValues, ResolverOptions, ResolverResult } from 'react-hook-form';
import * as Ajv from 'ajv';

export interface FormValues {
  email: string;
  password: string;
}

export interface Schema {
  type: string;
  properties: {
    [key: string]: {
      type: string;
      minLength?: number;
      errorMessage?:
        | {
            [key: string]: string;
          }
        | string;
    };
  };
  required: string[];
}

export type Resolver = (
  schema: Schema,
  schemaOptions?: Ajv.Options,
  factoryOptions?: { mode?: 'async' | 'sync' },
) => <TFieldValues extends FieldValues, TContext>(
  values: TFieldValues,
  context: TContext | undefined,
  options: ResolverOptions<TFieldValues>,
) => Promise<ResolverResult<TFieldValues>>;
