/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Alvo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AlvoUpdateFormInputValues = {
    NomeAlvo?: string;
};
export declare type AlvoUpdateFormValidationValues = {
    NomeAlvo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AlvoUpdateFormOverridesProps = {
    AlvoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeAlvo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AlvoUpdateFormProps = React.PropsWithChildren<{
    overrides?: AlvoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    alvo?: Alvo;
    onSubmit?: (fields: AlvoUpdateFormInputValues) => AlvoUpdateFormInputValues;
    onSuccess?: (fields: AlvoUpdateFormInputValues) => void;
    onError?: (fields: AlvoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AlvoUpdateFormInputValues) => AlvoUpdateFormInputValues;
    onValidate?: AlvoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AlvoUpdateForm(props: AlvoUpdateFormProps): React.ReactElement;
