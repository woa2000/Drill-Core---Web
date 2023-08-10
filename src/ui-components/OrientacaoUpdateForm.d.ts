/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Orientacao } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrientacaoUpdateFormInputValues = {
    Codigo?: number;
    Sigla?: string;
    Descricao?: string;
    Ativo?: boolean;
};
export declare type OrientacaoUpdateFormValidationValues = {
    Codigo?: ValidationFunction<number>;
    Sigla?: ValidationFunction<string>;
    Descricao?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrientacaoUpdateFormOverridesProps = {
    OrientacaoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Codigo?: PrimitiveOverrideProps<TextFieldProps>;
    Sigla?: PrimitiveOverrideProps<TextFieldProps>;
    Descricao?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OrientacaoUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrientacaoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    orientacao?: Orientacao;
    onSubmit?: (fields: OrientacaoUpdateFormInputValues) => OrientacaoUpdateFormInputValues;
    onSuccess?: (fields: OrientacaoUpdateFormInputValues) => void;
    onError?: (fields: OrientacaoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrientacaoUpdateFormInputValues) => OrientacaoUpdateFormInputValues;
    onValidate?: OrientacaoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrientacaoUpdateForm(props: OrientacaoUpdateFormProps): React.ReactElement;
