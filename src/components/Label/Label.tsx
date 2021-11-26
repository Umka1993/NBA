import React from 'react';
import {ISignInFormData} from "../../../main";

export const Label = ({name, label}:ISignInFormData) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
        </>
    );
};


