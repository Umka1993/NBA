import s from '../../assets/style/main.module.scss'
import {useForm, SubmitHandler, UseFormRegister, Path, appendErrors} from "react-hook-form";

export interface IInputProps {
    disabled?: boolean,
    error?: boolean,
    togglePasswordShown?: () => void
    isDisabled?: boolean
    passwordShown?: boolean
    eyeClose?: string
    eyeOpen?: string
    type?: string
    label: any
    register?: any
}
type InputProps = {
    register: UseFormRegister<IInputProps>;
    required: boolean;
    label: any
}


export const Input = (
        {
            label,
            error = false,
            togglePasswordShown,
            isDisabled,
            passwordShown,
            eyeClose = null,
            eyeOpen = null,
            type = 'text',
            register
        }: IInputProps ): JSX.Element => {




        // console.log(watch("example")) // watch input value by passing the name of it
        return (
            <div className={s.inputBlock}>
                <label htmlFor={label}>{label}</label>
                <div className={`${error ? s.error : ''} ${s.inputWrap}`}>
                    <input {...register(label, {required: true})}
                           className={`${isDisabled ? s.disabled : ''} `}
                           type={!isDisabled ? (passwordShown ? type : 'text') : type}
                           id={label}/>
                    {eyeClose && eyeOpen ?
                        <div className={s.icon}>
                            <img
                                src={!isDisabled ? (!passwordShown ? eyeOpen : eyeClose) : eyeClose}
                                alt="eye img"
                                onClick={togglePasswordShown}

                            />
                        </div>
                        : null}
                </div>

                {error && (<span>Wrong {label}. Please, try again.</span>)}

            </div>
        )
    }
;


