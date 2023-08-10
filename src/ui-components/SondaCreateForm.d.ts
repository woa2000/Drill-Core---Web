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
export declare type SondaCreateFormInputValues = {
    NomeSonda?: string;
    Ativo?: boolean;
};
export declare type SondaCreateFormValidationValues = {
    NomeSonda?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SondaCreateFormOverridesProps = {
    SondaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeSonda?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SondaCreateFormProps = React.PropsWithChildren<{
    overrides?: SondaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SondaCreateFormInputValues) => SondaCreateFormInputValues;
    onSuccess?: (fields: SondaCreateFormInputValues) => void;
    onError?: (fields: SondaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SondaCreateFormInputValues) => SondaCreateFormInputValues;
    onValidate?: SondaCreateFormValidationValues;
} & React.CSSProperties>;
export default function SondaCreateForm(props: SondaCreateFormProps): React.ReactElement;
