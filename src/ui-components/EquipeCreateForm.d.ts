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
export declare type EquipeCreateFormInputValues = {
    Nome?: string;
    Funcao?: string;
    Ativo?: boolean;
};
export declare type EquipeCreateFormValidationValues = {
    Nome?: ValidationFunction<string>;
    Funcao?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipeCreateFormOverridesProps = {
    EquipeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    Funcao?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EquipeCreateFormProps = React.PropsWithChildren<{
    overrides?: EquipeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquipeCreateFormInputValues) => EquipeCreateFormInputValues;
    onSuccess?: (fields: EquipeCreateFormInputValues) => void;
    onError?: (fields: EquipeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipeCreateFormInputValues) => EquipeCreateFormInputValues;
    onValidate?: EquipeCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquipeCreateForm(props: EquipeCreateFormProps): React.ReactElement;
