import {useCallback, useMemo, useState} from "react";
import eyeClose from '../../assets/icon/eyeClose.svg'
import eyeOpen from '../../assets/icon/eyeOpen.svg'
import {IInputProps} from "../../../main";
import {InputPassword} from "../InputPassword/InputPassword";


export const InputPasswordAgain = ({
                                       disabled,
                                       register,
                                       errors,
                                       label,
                                       name,
                                       message
                                   }: IInputProps): JSX.Element => {

    const [passwordShown, setPasswordShown] = useState(true)


    const togglePasswordShown = useCallback(() => {
        setPasswordShown(!passwordShown)
    }, [passwordShown])

    const isDisabled = useMemo(() => {
        return errors && disabled ? !disabled : disabled
    }, [errors, disabled])


    return (
        <>
            <InputPassword disabled={disabled}
                   label={label}
                   togglePasswordShown={togglePasswordShown}
                   isDisabled={isDisabled}
                   passwordShown={passwordShown}
                   eyeClose={eyeClose}
                   eyeOpen={eyeOpen}
                   type='password'
                   register={register}
                   errors={errors}
                   name={name}
                   message={message}
            />
        </>


    )
};


