/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Atividade } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AtividadeUpdateFormInputValues = {
    NomeAtividade?: string;
    Codigo?: number;
    Tipo?: string;
    Ativo?: boolean;
    InfoPerfuracao?: boolean;
};
export declare type AtividadeUpdateFormValidationValues = {
    NomeAtividade?: ValidationFunction<string>;
    Codigo?: ValidationFunction<number>;
    Tipo?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
    InfoPerfuracao?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AtividadeUpdateFormOverridesProps = {
    AtividadeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeAtividade?: PrimitiveOverrideProps<TextFieldProps>;
    Codigo?: PrimitiveOverrideProps<TextFieldProps>;
    Tipo?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
    InfoPerfuracao?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AtividadeUpdateFormProps = React.PropsWithChildren<{
    overrides?: AtividadeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    atividade?: Atividade;
    onSubmit?: (fields: AtividadeUpdateFormInputValues) => AtividadeUpdateFormInputValues;
    onSuccess?: (fields: AtividadeUpdateFormInputValues) => void;
    onError?: (fields: AtividadeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AtividadeUpdateFormInputValues) => AtividadeUpdateFormInputValues;
    onValidate?: AtividadeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AtividadeUpdateForm(props: AtividadeUpdateFormProps): React.ReactElement;
