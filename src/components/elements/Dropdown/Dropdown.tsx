import theme from '@mobile/theme';
import React, { useState } from 'react';
import { Box } from '../Box/Box.styles';
import * as S from './Dropdown.styles';

interface IDropdownProps {
  placeholder: string;
  items: models.DropdownProps[];
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const Dropdown = ({ placeholder, items, value, setValue }: IDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box width={90} zIndex={100}>
      <S.Picker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={placeholder}
        dropDownContainerStyle={{
          zIndex: 100,
          backgroundColor: theme.colors.inputBackgroud,
          borderColor: theme.colors.disabled,
          borderRadius: 20,
        }}
        textStyle={{
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.regular,
          paddingLeft: 4,
        }}
        placeholderStyle={{
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.regular,
          color: theme.colors.placeholder,
          paddingLeft: 4,
        }}
      />
    </Box>
  );
};

export default Dropdown;
