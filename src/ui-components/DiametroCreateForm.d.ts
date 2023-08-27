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
export declare type DiametroCreateFormInputValues = {
    Nome?: string;
};
export declare type DiametroCreateFormValidationValues = {
    Nome?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiametroCreateFormOverridesProps = {
    DiametroCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiametroCreateFormProps = React.PropsWithChildren<{
    overrides?: DiametroCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DiametroCreateFormInputValues) => DiametroCreateFormInputValues;
    onSuccess?: (fields: DiametroCreateFormInputValues) => void;
    onError?: (fields: DiametroCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiametroCreateFormInputValues) => DiametroCreateFormInputValues;
    onValidate?: DiametroCreateFormValidationValues;
} & React.CSSProperties>;
export default function DiametroCreateForm(props: DiametroCreateFormProps): React.ReactElement;
