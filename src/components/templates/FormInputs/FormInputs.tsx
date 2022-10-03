import React from 'react';
import { Box, DefaultInput } from '@mobile/components';

import * as S from './FormInputs.styles';
import { DefaultInputProps } from '@mobile/components/modules/DefaultInput/DefaultInput';

export interface FormsInput {
  form: DefaultInputProps[][];
  width?: number;
}

const FormInputs = ({ form, width = 90 }: FormsInput) => {
  return (
    <Box alignSelf="center">
      {form.map((row) => (
        <Box
          width={width}
          flex={1}
          flexDirection={row.length > 1 ? 'row' : 'column'}
          justifyContent={row.length > 1 ? 'space-between' : undefined}
        >
          {row.map((input) => (
            <Box flex={1 / row.length - 0.01}>
              <DefaultInput {...input} />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default FormInputs;
