import { StylesConfig } from 'react-select';

export interface selectValues {
  readonly value: string;
  readonly label: string;
}

export const commandsPerPageStyles: StylesConfig<selectValues, true> = {
  control: (styles) => {
    return {
      ...styles,
      ':hover': {
        width: '88px',
        border: '1px solid #d1d1d1',
        borderColor: '#d1d1d1',
        boxShadow: 'none',
      },
      ':focus': {
        border: '1px solid #d1d1d1',
        borderColor: '#d1d1d1',
        boxShadow: 'none',
      },
      backgroundColor: 'white',
      width: '88px',
      maxWidth: '100%',
      margin: 0,
      border: '1px solid #d1d1d1',
      boxShadow: 'none',
    };
  },
  container: (styles) => {
    return {
      ...styles,
      // margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
    };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      borderTop: '1px solid #D1D1D1',
      background: 'white',
      color: '#D1D1D1',
      fontFamily: 'AvenirMedium',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '24px',
      paddingLeft: '20px',
    };
  },
  menuList: (styles) => ({
    ...styles,
    padding: 0,
    border: 'none',
    background: 'white',
    borderLeft: '1px solid #D1D1D1',
    borderBottom: '1px solid #D1D1D1',
    borderRight: '1px solid #D1D1D1',
    borderRadius: '4px',
  }),
  menu: (styles) => ({
    ...styles,
    padding: 0,
    boxShadow: 'none',
    borderTop: 'none',
    bottom: '100%',
    top: 'none',
  }),
};
