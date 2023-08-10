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
export declare type AlvoCreateFormInputValues = {
    NomeAlvo?: string;
};
export declare type AlvoCreateFormValidationValues = {
    NomeAlvo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AlvoCreateFormOverridesProps = {
    AlvoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeAlvo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AlvoCreateFormProps = React.PropsWithChildren<{
    overrides?: AlvoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AlvoCreateFormInputValues) => AlvoCreateFormInputValues;
    onSuccess?: (fields: AlvoCreateFormInputValues) => void;
    onError?: (fields: AlvoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AlvoCreateFormInputValues) => AlvoCreateFormInputValues;
    onValidate?: AlvoCreateFormValidationValues;
} & React.CSSProperties>;
export default function AlvoCreateForm(props: AlvoCreateFormProps): React.ReactElement;
