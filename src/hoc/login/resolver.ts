import { toNestError, validateFieldsNatively } from '@hookform/resolvers';
import Ajv, { DefinedError } from 'ajv';
import ajvKeywords from 'ajv-keywords';
import ajvFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
import { appendErrors, FieldError, ValidateResult } from 'react-hook-form';
import { Resolver } from './types';

const parseErrorSchema = (
  errors: DefinedError[],
  validateAllFieldCriteria: boolean,
) => {
  errors.map((error) => {
    const result = { ...error };

    if (error.keyword === 'required') {
      result.instancePath = `/${error.params.missingProperty}`;
    }

    return result;
  });

  return errors.reduce<Record<string, FieldError>>((previous, error) => {
    const path = error.instancePath.substring(1).replace(/\//g, '.');

    const result = { ...previous };

    if (!result[path]) {
      result[path] = {
        message: error.message,
        type: error.keyword,
      };
    }

    if (validateAllFieldCriteria) {
      const { types } = result[path];
      const messages: ValidateResult = types && types[error.keyword];

      result[path] = appendErrors(
        path,
        validateAllFieldCriteria,
        result,
        error.keyword,
        messages,
      ) as FieldError;
    }

    return result;
  }, {});
};

const ajvResolver: Resolver =
  (schema, schemaOptions, resolverOptions = {}) =>
  async (values, _, options) => {
    const ajv = new Ajv({
      allErrors: true,
      validateSchema: true,
      ...schemaOptions,
    });

    ajvKeywords(ajv, 'regexp');
    ajvErrors(ajv);
    ajvFormats(ajv);

    const compileObject = {
      $async: resolverOptions?.mode === 'async',
      ...schema,
    };

    const validate = ajv.compile(compileObject);

    const valid = await validate(values);

    if (!valid) {
      return {
        values: {},
        errors: toNestError(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          parseErrorSchema(
            validate.errors as DefinedError[],
            !options.shouldUseNativeValidation &&
              options.criteriaMode === 'all',
          ),
          options,
        ),
      };
    }

    if (options.shouldUseNativeValidation) {
      validateFieldsNatively({}, options);
    }

    return {
      values,
      errors: {},
    };
  };

export default ajvResolver;
