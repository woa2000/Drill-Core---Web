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
export declare type AtividadeCreateFormInputValues = {
    NomeAtividade?: string;
    Codigo?: number;
    Tipo?: string;
    Ativo?: boolean;
    InfoPerfuracao?: boolean;
};
export declare type AtividadeCreateFormValidationValues = {
    NomeAtividade?: ValidationFunction<string>;
    Codigo?: ValidationFunction<number>;
    Tipo?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
    InfoPerfuracao?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AtividadeCreateFormOverridesProps = {
    AtividadeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeAtividade?: PrimitiveOverrideProps<TextFieldProps>;
    Codigo?: PrimitiveOverrideProps<TextFieldProps>;
    Tipo?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
    InfoPerfuracao?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AtividadeCreateFormProps = React.PropsWithChildren<{
    overrides?: AtividadeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AtividadeCreateFormInputValues) => AtividadeCreateFormInputValues;
    onSuccess?: (fields: AtividadeCreateFormInputValues) => void;
    onError?: (fields: AtividadeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AtividadeCreateFormInputValues) => AtividadeCreateFormInputValues;
    onValidate?: AtividadeCreateFormValidationValues;
} & React.CSSProperties>;
export default function AtividadeCreateForm(props: AtividadeCreateFormProps): React.ReactElement;
