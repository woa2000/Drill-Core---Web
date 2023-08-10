/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Cliente } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClienteUpdateFormInputValues = {
    NomeCliente?: string;
    LogoClient?: string;
    Ativo?: boolean;
};
export declare type ClienteUpdateFormValidationValues = {
    NomeCliente?: ValidationFunction<string>;
    LogoClient?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClienteUpdateFormOverridesProps = {
    ClienteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeCliente?: PrimitiveOverrideProps<TextFieldProps>;
    LogoClient?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ClienteUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClienteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cliente?: Cliente;
    onSubmit?: (fields: ClienteUpdateFormInputValues) => ClienteUpdateFormInputValues;
    onSuccess?: (fields: ClienteUpdateFormInputValues) => void;
    onError?: (fields: ClienteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClienteUpdateFormInputValues) => ClienteUpdateFormInputValues;
    onValidate?: ClienteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClienteUpdateForm(props: ClienteUpdateFormProps): React.ReactElement;
