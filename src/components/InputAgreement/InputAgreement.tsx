import s from '../styleInput.module.scss';
import {IInputProps} from "../../../main";
import {useState} from "react";


export const InputAgreement = <T, >(
        {
            isDisabled,
            register,
            name
        }: IInputProps<T>): JSX.Element => {

        const [isChecked, setIsChecked] = useState(false);

        const toggleIsChecked = () => {
            setIsChecked(!isChecked)
            return isChecked
        }



        return (
            <div className={s.inputRadioBlock}>
                <div className={s.inputRadioWrap}>
                    <input {...register(name, {required: "This is required."})}
                           className={`${isDisabled ? s.disabled : ''} `}
                           type='radio'
                           id={name}
                           name={name}
                           onClick={toggleIsChecked}
                           checked={isChecked}
                    />
                    <label htmlFor={name}>I accept the agreement</label>
                </div>
            </div>
        )
    }
;


