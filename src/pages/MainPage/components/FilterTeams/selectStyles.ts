import { StylesConfig } from 'react-select';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
}

export const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => {
    return {
      ...styles,
      ':hover': {
        width: '364px',
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
      width: '364px',
      maxWidth: '100%',
      margin: 0,
      boxShadow: 'none',
      border: '1px solid #d1d1d1',
      '@media only screen and (max-width: 991px)': {
        ...styles,
        width: '300px',
        borderColor: '#d1d1d1',
        boxShadow: 'none',
        ':hover': {
          width: '300px',
          boxShadow: 'none',
          borderColor: '#d1d1d1',
        },
      },
      '@media only screen and (min-width: 375px and max-width: 768px)': {
        ...styles,
        // width: '60%',
        borderColor: '#d1d1d1',
        boxShadow: 'none',
        width: '350px',
        marginTop: '16px',
        ':hover': {
          width: '350px',
          border: '1px solid #d1d1d1',
          borderColor: '#d1d1d1',
          boxShadow: 'none',
        },
      },
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
    // const color = chroma(data.color);
    return {
      ...styles,
      borderTop: '1px solid #D1D1D1',
    };
  },
  valueContainer: (styles) => {
    return {
      ...styles,
      display: 'flex',
      flexWrap: 'nowrap',
      maxWidth: '70%',
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      display: 'flex',
      backgroundColor: '#E4163A',
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: 'white',
    fontFamily: 'AvenirBook',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: 'white',
    ':hover': {
      backgroundColor: 'white',
      color: 'white',
    },
  }),
  input: (styles) => ({
    ...styles,
    color: 'white',
    ':hover': {
      display: 'flex',
      color: 'white',
      border: '1px',
    },
  }),
  clearIndicator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0,
    border: 'none',
  }),
  menu: (styles) => ({
    ...styles,
    padding: 0,
    boxShadow: 'none',
    borderTop: 'none',
    borderLeft: '1px solid #D1D1D1',
    borderBottom: '1px solid #D1D1D1',
    borderRight: '1px solid #D1D1D1',
  }),
};
