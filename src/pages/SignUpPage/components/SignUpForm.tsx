import React, {useState} from 'react';
import s from "../../SignInPage/components/SignInForm.module.scss";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {useForm} from "react-hook-form";
import {FormNames} from "../../../../main";
import {InputName} from "../../../components/InputName/InputName";
import {InputAgreement} from "../../../components/InputAgreement/InputAgreement";
import {Link, useNavigate} from "react-router-dom";
import {signAuthData} from '../../../modules/authorization/authorizationThunk'
import {useAppDispatch} from "../../../core/redux/hooks/redux";
import {InputPasswordAgain} from "../../../components/InputPasswordAgain/InputPasswordAgain";
import {UnpackNestedValue} from "react-hook-form/dist/types/form";
import {InputLogin} from "../../../components/InputLogin/InputLogin";


export const SignUpForm = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormNames>();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch()


    const onSubmit = (data: UnpackNestedValue<FormNames>) => {
        if (data.Password !== data.passwordAgain) {
            setMessage('The passwords dont match')
        } else {
            setMessage('')
            dispatch(signAuthData(data))
            navigate('/')
        }
    }
    return (
        <div className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <form action="#">
                <div className={s.formWrap}>
                    <div className={s.title}>
                        <h2>Sign Up</h2>
                    </div>
                    <div className={`${errors.userName ? s.error : ''} ${s.componentWrap}`}>
                        <InputName<FormNames>
                            register={register}
                            disabled={false}
                            name={"userName"}
                            isDisabled={false}
                        />
                        {errors.userName && <span>{errors.userName.message}</span>}
                    </div>

                    <div className={`${errors.Login ? s.error : ''} ${s.componentWrap}`}>
                        <InputLogin<FormNames>
                            disabled={false}
                            register={register}
                            name={"Login"}
                            isDisabled={false}
                        />
                        {errors.Login && (<span>{errors.Login.message}</span>)}
                    </div>
                    <div className={`${(errors.Password || message) ? s.error : ''} ${s.componentWrap}`}>
                        <InputPassword<FormNames>
                            disabled={false}
                            register={register}
                            name={"Password"}
                            isDisabled={false}
                        />
                        {errors.Password && (<span>{errors.Password.message}</span>)}
                        {message && (<span>{message}</span>)}

                    </div>

                    <div className={`${(errors.passwordAgain || message) ? s.error : ''} ${s.componentWrap}`}>
                        <InputPasswordAgain<FormNames>
                            disabled={false}
                            register={register}
                            name={"passwordAgain"}
                        />
                        {errors.passwordAgain && <span>{errors.passwordAgain.message}</span>}
                        {message && (<span>{message}</span>)}

                    </div>


                    <div className={`${errors.acceptAgreement ? s.error : ''} ${s.componentWrap}`}>
                        <InputAgreement<FormNames>
                            errors={errors}
                            register={register}
                            name={"acceptAgreement"}
                        />
                        {errors.acceptAgreement && <span>{errors.acceptAgreement.message}</span>}
                    </div>


                    <div className={s.formButton}>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
                <div className={s.signUpRow}>
                    <p>Not a member yet?
                        <Link to='/'> Sign Ip</Link>
                    </p>
                </div>

            </form>

        </div>


    );
};




