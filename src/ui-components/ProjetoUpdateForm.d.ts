/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Projeto } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjetoUpdateFormInputValues = {
    NomeProjeto?: string;
};
export declare type ProjetoUpdateFormValidationValues = {
    NomeProjeto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjetoUpdateFormOverridesProps = {
    ProjetoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeProjeto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjetoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjetoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    projeto?: Projeto;
    onSubmit?: (fields: ProjetoUpdateFormInputValues) => ProjetoUpdateFormInputValues;
    onSuccess?: (fields: ProjetoUpdateFormInputValues) => void;
    onError?: (fields: ProjetoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjetoUpdateFormInputValues) => ProjetoUpdateFormInputValues;
    onValidate?: ProjetoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjetoUpdateForm(props: ProjetoUpdateFormProps): React.ReactElement;
