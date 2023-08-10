/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuarioClienteCreateFormInputValues = {
    userID?: string;
};
export declare type UsuarioClienteCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioClienteCreateFormOverridesProps = {
    UsuarioClienteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioClienteCreateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioClienteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsuarioClienteCreateFormInputValues) => UsuarioClienteCreateFormInputValues;
    onSuccess?: (fields: UsuarioClienteCreateFormInputValues) => void;
    onError?: (fields: UsuarioClienteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuarioClienteCreateFormInputValues) => UsuarioClienteCreateFormInputValues;
    onValidate?: UsuarioClienteCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioClienteCreateForm(props: UsuarioClienteCreateFormProps): React.ReactElement;
