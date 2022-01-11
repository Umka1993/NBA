import React, { useEffect, useState } from 'react';
import s from './addTeamForm.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { InputLoadPhoto } from '../../../../../../ui/inputs/InputLoadPhoto/InputLoadPhoto';
import {
  commandsDataForm,
  IDataCommandRequest,
  ITeamFormLabels,
  ITeamFormNames,
} from '../../../../../../types';
import { Input } from '../../../../../../ui/inputs/Input/Input';
import { CancelBtn } from '../../../../../../ui/buttons/CancelBtn/cancelBtn';
import { FormBtn } from '../../../../../../ui/buttons/FormBtn/FormBtn';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveImage } from '../../../../../../modules/Commands/saveImage/saveImageThunk';
import { useAppSelector } from '../../../../../../core/redux/hooks/redux';
import { InputYearFoundation } from '../../../../../../ui/inputs/InputYerFoundation/InputYerFoundation';
import { addCommand } from '../../../../../../modules/Commands/addComand/addCommandThunk';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// const Controller = ({ control, register, name, rules, render }) => {
//   const props = register(name);
//   return render();
// };

export const AddTeamForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm<ITeamFormNames>({ mode: 'onChange' });
  const [picture, getPicture] = useState<string | Blob>('');
  const { imageUrl } = useAppSelector((state) => state.saveImageReducer);
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState<commandsDataForm>();

  useEffect(() => {
    if (dataForm) {
      const dataCommand: IDataCommandRequest = {
        name: dataForm.teamName,
        foundationYear: dataForm.yearFoundation,
        division: dataForm.division,
        conference: dataForm.conference,
        imageUrl: imageUrl,
      };
      dispatch(addCommand(dataCommand));
    }
  }, [imageUrl]);

  const onSubmit = (data: commandsDataForm) => {
    console.log(data);
    const formData = new FormData();
    formData.append('file', picture);
    dispatch(saveImage(formData));
    setDataForm(data);
  };

  return (
    <div className={s.addTeamForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.loadPhoto}>
          <div className={`${errors.photoInput ? s.error : ''} ${s.componentWrap}`}>
            <InputLoadPhoto<ITeamFormNames, ITeamFormLabels>
              register={register}
              name={'photoInput'}
              getPicture={getPicture}
            />
            {errors.photoInput && <span>{errors.photoInput.message}</span>}
          </div>
        </div>
        <div className={s.data}>
          <div className={`${errors.teamName ? s.error : ''} ${s.componentWrap}`}>
            <Input<ITeamFormNames, ITeamFormLabels>
              register={register}
              name={'teamName'}
              label={'Name'}
            />
            {errors.teamName && <span>{errors.teamName.message}</span>}
          </div>
          <div className={`${errors.division ? s.error : ''} ${s.componentWrap}`}>
            <Input<ITeamFormNames, ITeamFormLabels>
              register={register}
              name={'division'}
              label={'Division'}
            />
            {errors.division && <span>{errors.division.message}</span>}
          </div>
          <div className={`${errors.conference ? s.error : ''} ${s.componentWrap}`}>
            <Input<ITeamFormNames, ITeamFormLabels>
              register={register}
              name={'conference'}
              label={'Conference'}
            />
            {errors.conference && <span>{errors.conference.message}</span>}
          </div>
          <div className={`${errors.yearFoundation ? s.error : ''} ${s.componentWrap}`}>
            <Controller
              control={control}
              name="yearFoundation"
              rules={{ required: 'This is required.' }}
              render={({ field }) => {
                return <InputYearFoundation field={field} name="yearFoundation" />;
              }}
            />

            {errors.yearFoundation && <span>{errors.yearFoundation.message}</span>}
          </div>
          <div className={s.formBtns}>
            <div className={s.wrapBtn}>
              <CancelBtn isDirty={isDirty}>Cancel</CancelBtn>
            </div>
            <div className={s.wrapBtn}>
              <FormBtn isDirty={isDirty} isValid={isValid}>
                Save
              </FormBtn>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
