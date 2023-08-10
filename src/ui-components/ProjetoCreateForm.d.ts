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
export declare type ProjetoCreateFormInputValues = {
    NomeProjeto?: string;
};
export declare type ProjetoCreateFormValidationValues = {
    NomeProjeto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjetoCreateFormOverridesProps = {
    ProjetoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeProjeto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjetoCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjetoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjetoCreateFormInputValues) => ProjetoCreateFormInputValues;
    onSuccess?: (fields: ProjetoCreateFormInputValues) => void;
    onError?: (fields: ProjetoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjetoCreateFormInputValues) => ProjetoCreateFormInputValues;
    onValidate?: ProjetoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProjetoCreateForm(props: ProjetoCreateFormProps): React.ReactElement;
