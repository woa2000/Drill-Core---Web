/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClienteCreateFormInputValues = {
    NomeCliente?: string;
    LogoClient?: string;
    Ativo?: boolean;
};
export declare type ClienteCreateFormValidationValues = {
    NomeCliente?: ValidationFunction<string>;
    LogoClient?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClienteCreateFormOverridesProps = {
    ClienteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeCliente?: PrimitiveOverrideProps<TextFieldProps>;
    LogoClient?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ClienteCreateFormProps = React.PropsWithChildren<{
    overrides?: ClienteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClienteCreateFormInputValues) => ClienteCreateFormInputValues;
    onSuccess?: (fields: ClienteCreateFormInputValues) => void;
    onError?: (fields: ClienteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClienteCreateFormInputValues) => ClienteCreateFormInputValues;
    onValidate?: ClienteCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClienteCreateForm(props: ClienteCreateFormProps): React.ReactElement;
