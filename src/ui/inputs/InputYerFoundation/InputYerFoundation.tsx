import React, { useState } from 'react';
import s from '../styleInput.module.scss';

import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';
import { ControllerRenderProps } from 'react-hook-form';
import { ITeamFormNames } from 'types/formTypes';

export const InputYearFoundation = ({
  field,
  name,
}: {
  name: string;
  field: ControllerRenderProps<ITeamFormNames, 'foundationYear'>;
}): JSX.Element => {
  const [startDate, setStartDate] = useState('');

  const formatDate = (arg: Date) => {
    // const day = arg.getDate();
    // const month = arg.getMonth();
    const year = arg.getFullYear();
    setStartDate(`${year}`);
    field.onChange(year);
    console.log(field.value);
    return `${year}`;
  };
  return (
    <div className={s.inputBlock}>
      <label htmlFor={name}>Year of foundation</label>
      <div className={s.inputWrap}>
        <ReactDatePicker
          {...field}
          onChange={(date: Date) => formatDate(date)}
          dateFormat="yyyy"
          showYearPicker
          maxDate={new Date()}
          value={startDate}
        />
      </div>
    </div>
  );
};
