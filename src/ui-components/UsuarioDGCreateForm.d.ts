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
export declare type UsuarioDGCreateFormInputValues = {
    userID?: string;
    Nome?: string;
    UserName?: string;
    Email?: string;
    Status?: string;
};
export declare type UsuarioDGCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    Nome?: ValidationFunction<string>;
    UserName?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioDGCreateFormOverridesProps = {
    UsuarioDGCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    UserName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioDGCreateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioDGCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsuarioDGCreateFormInputValues) => UsuarioDGCreateFormInputValues;
    onSuccess?: (fields: UsuarioDGCreateFormInputValues) => void;
    onError?: (fields: UsuarioDGCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuarioDGCreateFormInputValues) => UsuarioDGCreateFormInputValues;
    onValidate?: UsuarioDGCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioDGCreateForm(props: UsuarioDGCreateFormProps): React.ReactElement;
