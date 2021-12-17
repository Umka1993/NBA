import React from 'react';
import Select from 'react-select';
import { commandsPerPageStyles, selectValues } from './selectStyles';

const netItems: readonly selectValues[] = [
  { value: '6', label: '6' },
  { value: '12', label: '12' },
  { value: '24', label: '24' },
];

export const ItemsPerPage = () => {
  return (
    <>
      <Select
        className="ItemsPerPage"
        classNamePrefix="ItemsPerPage"
        options={netItems}
        styles={commandsPerPageStyles}
        defaultValue={netItems[0]}
      />
    </>
  );
};
