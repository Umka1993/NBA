import React from 'react';
import s from './addTeamForm.module.scss';
import { InputLoadPhoto } from '../../../../../../ui/inputs/InputLoadPhoto/InputLoadPhoto';
import { ITeamFormLabels, ITeamFormNames } from '../../../../../../types';
import { Input } from '../../../../../../ui/inputs/Input/Input';
import { CancelBtn } from '../../../../../../ui/buttons/CancelBtn/cancelBtn';
import { FormBtn } from '../../../../../../ui/buttons/FormBtn/FormBtn';
import { useForm } from 'react-hook-form';

export const AddTeamForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ITeamFormNames>({ mode: 'onChange' });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className={s.addTeamForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.loadPhoto}>
          <div className={`${errors.photoInput ? s.error : ''} ${s.componentWrap}`}>
            <InputLoadPhoto<ITeamFormNames, ITeamFormLabels>
              register={register}
              name={'photoInput'}
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

          <div className={`${errors.Division ? s.error : ''} ${s.componentWrap}`}>
            <Input<ITeamFormNames, ITeamFormLabels>
              register={register}
              name={'Division'}
              label={'Division'}
            />
            {errors.Division && <span>{errors.Division.message}</span>}
          </div>

          <div className={`${errors.Conference ? s.error : ''} ${s.componentWrap}`}>
            <Input<ITeamFormNames, ITeamFormLabels>
              register={register}
              name={'Conference'}
              label={'Conference'}
            />
            {errors.Conference && <span>{errors.Conference.message}</span>}
          </div>

          <div className={`${errors.yearFoundation ? s.error : ''} ${s.componentWrap}`}>
            <Input<ITeamFormNames, ITeamFormLabels>
              register={register}
              name={'yearFoundation'}
              label={'Year of foundation'}
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
