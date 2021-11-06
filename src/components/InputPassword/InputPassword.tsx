import {useState, useMemo, useCallback} from "react";
import s from '../../assets/style/main.module.scss'
import eyeClose from '../../assets/icon/eyeClose.svg'
import eyeOpen from '../../assets/icon/eyeOpen.svg'
import {IInputProps, Input} from "../Input/Input";






export const InputPassword = ({disabled, error, register}: IInputProps): JSX.Element => {

    const [passwordShown, setPasswordShown] = useState(true)


    const togglePasswordShown = useCallback(() => {
        setPasswordShown(!passwordShown)
    }, [passwordShown])

    const isDisabled = useMemo(() => {
        return error && disabled ? !disabled : disabled
    }, [error, disabled])

    return (
        <>
            <Input disabled={disabled}
                   error={error}
                   label='password'
                   togglePasswordShown={togglePasswordShown}
                   isDisabled={isDisabled}
                   passwordShown={passwordShown}
                   eyeClose={eyeClose}
                   eyeOpen={eyeOpen}
                   type='password'
                   register={register}




            />





        </>


    )
};


