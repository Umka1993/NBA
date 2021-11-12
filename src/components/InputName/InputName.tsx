import {IInputProps} from "../../../main";
import {Input} from "../Input/Input";


export const InputName = (
        {
            label,
            register,
            error,
            name
        }: IInputProps): JSX.Element => {



        return (
            <>
                <Input

                    label={label}
                    type='text'
                    register={register}
                    error={error}
                    name={name}
                />
            </>
        )
    }
;


