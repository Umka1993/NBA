// import s from './styleInput.module.scss'
import s from '../../assets/style/main.module.scss'
import path from '../../assets/icon/eyeClose.svg'
import eye from '../../assets/icon/eyeOpen.svg'
import {useState} from "react";

interface IInputProps {
    disabled: boolean,
    error: boolean,
    // iconSrc: string

}

export const InputWithIcon = ({disabled, error }: IInputProps): JSX.Element => {

    const [isImage, setIsImage] = useState(true)

    const changeImg = () => {
        setIsImage(prevMode => !prevMode)
    }

    const changeImage = (disabled) =>{

        if(disabled)
            return path
        if (!disabled)
            return  !isImage ? path : eye
    }
    return (
        <div className={s.inputBlock}>
            <label htmlFor="login">Login</label>
            <div className={`${error ? s.error : ''} ${s.inputWrap}`}>
                <input className={`${disabled ? s.disabled : ''} `}
                       type={!isImage ?'text':'password'}
                       id='password'/>
                <div className={s.icon}>
                    <img
                        src={eye}
                        alt="eye img"
                        onClick={changeImg}
                    />
                </div>

            </div>
            {error && (<span>Required</span>)}

        </div>
    )
};



import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
            <select {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>

            <input {...register("Developer", { required: true })} type="radio" value="Yes" />
            <input {...register("Developer", { required: true })} type="radio" value="No" />

            <input type="submit" />
        </form>
    );
}


