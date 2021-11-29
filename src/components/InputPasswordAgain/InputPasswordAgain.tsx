import {useCallback, useState} from "react";
import eyeClose from '../../assets/icon/eyeClose.svg'
import eyeOpen from '../../assets/icon/eyeOpen.svg'
import {IInputProps} from "../../../main";
import s from "../styleInput.module.scss";


export const InputPasswordAgain = <T, >({

                                            register,
                                            name,
                                            isDisabled
                                        }: IInputProps<T>): JSX.Element => {
    const [passwordShown, setPasswordShown] = useState(true)


    const togglePasswordShown = useCallback(() => {
        setPasswordShown(!passwordShown)
    }, [passwordShown])

    return (
        <>
            <div className={s.inputBlock}>
                <label htmlFor={name}>Enter your password again</label>
                <div className={s.inputWrap}>
                    <input {...register(name, {required: "This is required."},)}
                           className={`${isDisabled ? s.disabled : ''} `}
                           type={!isDisabled ? (passwordShown ? 'password' : 'text') : 'password'}
                           id={name}
                    />
                    {eyeClose && eyeOpen ?
                        <div className={s.icon} onClick={togglePasswordShown}>
                            <img
                                src={!isDisabled ? (!passwordShown ? eyeOpen : eyeClose) : eyeClose}
                                alt="eye img"
                            />
                        </div>
                        : null}
                </div>
            </div>
        </>
    )
};


