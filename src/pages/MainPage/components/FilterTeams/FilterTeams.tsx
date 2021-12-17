import React from 'react';
import Select from 'react-select';
import { ColourOption, colourStyles } from './selectStyles';

const colourOptions: readonly ColourOption[] = [
  { value: 'Portland trail blazers', label: 'Portland trail blazers' },
  { value: 'Minnesota timberwolves', label: 'Minnesota timberwolves' },
  { value: 'Oklahoma city thunder', label: 'Oklahoma city thunder' },
  { value: 'Philadelphia seventy sixers', label: 'Philadelphia seventy sixers' },
];

export const FilterTeams = () => {
  return (
    <>
      <Select
        className="teamsFilterSelect"
        classNamePrefix="teamsFilterSelect"
        options={colourOptions}
        isMulti={true}
        styles={colourStyles}
      />
    </>
  );
};
