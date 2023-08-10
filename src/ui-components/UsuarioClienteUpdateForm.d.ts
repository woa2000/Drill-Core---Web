/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UsuarioCliente } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuarioClienteUpdateFormInputValues = {
    userID?: string;
};
export declare type UsuarioClienteUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioClienteUpdateFormOverridesProps = {
    UsuarioClienteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioClienteUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioClienteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usuarioCliente?: UsuarioCliente;
    onSubmit?: (fields: UsuarioClienteUpdateFormInputValues) => UsuarioClienteUpdateFormInputValues;
    onSuccess?: (fields: UsuarioClienteUpdateFormInputValues) => void;
    onError?: (fields: UsuarioClienteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuarioClienteUpdateFormInputValues) => UsuarioClienteUpdateFormInputValues;
    onValidate?: UsuarioClienteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioClienteUpdateForm(props: UsuarioClienteUpdateFormProps): React.ReactElement;
