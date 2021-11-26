import {IInputProps} from "../../../main";
import {Input} from "../Input/Input";


export const InputName = (
        {
            label,
            register,
            errors,
            name
        }: IInputProps): JSX.Element => {


        return (
            <>
                <Input
                    label={label}
                    type='text'
                    register={register}
                    errors={errors}
                    name={name}
                />
            </>
        )
    }
;


