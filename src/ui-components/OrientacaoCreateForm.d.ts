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
export declare type OrientacaoCreateFormInputValues = {
    Codigo?: number;
    Sigla?: string;
    Descricao?: string;
    Ativo?: boolean;
};
export declare type OrientacaoCreateFormValidationValues = {
    Codigo?: ValidationFunction<number>;
    Sigla?: ValidationFunction<string>;
    Descricao?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrientacaoCreateFormOverridesProps = {
    OrientacaoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Codigo?: PrimitiveOverrideProps<TextFieldProps>;
    Sigla?: PrimitiveOverrideProps<TextFieldProps>;
    Descricao?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OrientacaoCreateFormProps = React.PropsWithChildren<{
    overrides?: OrientacaoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrientacaoCreateFormInputValues) => OrientacaoCreateFormInputValues;
    onSuccess?: (fields: OrientacaoCreateFormInputValues) => void;
    onError?: (fields: OrientacaoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrientacaoCreateFormInputValues) => OrientacaoCreateFormInputValues;
    onValidate?: OrientacaoCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrientacaoCreateForm(props: OrientacaoCreateFormProps): React.ReactElement;
