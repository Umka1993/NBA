import s from './styleInput.module.scss'
import {IInputProps} from "../../../main";


export const Input = (
        {
            label,
            togglePasswordShown,
            isDisabled,
            passwordShown,
            eyeClose,
            eyeOpen,
            type,
            register,
            error,
            name,
            message
        }: IInputProps): JSX.Element => {


        const isErrorKey = Object.keys(error);
        return (
            <div className={s.inputBlock}>
                {label && <label htmlFor={name}>{label}</label>}
                <div className={`${isErrorKey.includes(name) ? s.error : ''} ${s.inputWrap}`}>
                    <input {...register(name, {required: true},)}
                           className={`${isDisabled ? s.disabled : ''} `}
                           type={!isDisabled ? (passwordShown ? type : 'text') : type}
                           id={name}
                    />
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

                {isErrorKey.includes(name) && (<span>Wrong {label}. Please, try again.</span>)}
                {message && (<span>{message}</span>)}
            </div>
        )
    }
;


