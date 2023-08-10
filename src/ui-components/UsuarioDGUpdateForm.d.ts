/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UsuarioDG } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuarioDGUpdateFormInputValues = {
    userID?: string;
    Nome?: string;
    UserName?: string;
    Email?: string;
    Status?: string;
};
export declare type UsuarioDGUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    Nome?: ValidationFunction<string>;
    UserName?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioDGUpdateFormOverridesProps = {
    UsuarioDGUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    UserName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioDGUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioDGUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usuarioDG?: UsuarioDG;
    onSubmit?: (fields: UsuarioDGUpdateFormInputValues) => UsuarioDGUpdateFormInputValues;
    onSuccess?: (fields: UsuarioDGUpdateFormInputValues) => void;
    onError?: (fields: UsuarioDGUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuarioDGUpdateFormInputValues) => UsuarioDGUpdateFormInputValues;
    onValidate?: UsuarioDGUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioDGUpdateForm(props: UsuarioDGUpdateFormProps): React.ReactElement;
