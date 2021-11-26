import {IInputProps} from "../../../main";


export const Input_2 = ({register, name, label}: IInputProps): JSX.Element => {

        return (
            <>
                <input {...register(name, {required: "This is required."},)}
                       type='text'
                       id={label}
                />
            </>
        )
    }
;


