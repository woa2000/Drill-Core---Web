/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Diametro } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiametroUpdateFormInputValues = {
    Nome?: string;
};
export declare type DiametroUpdateFormValidationValues = {
    Nome?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiametroUpdateFormOverridesProps = {
    DiametroUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiametroUpdateFormProps = React.PropsWithChildren<{
    overrides?: DiametroUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    diametro?: Diametro;
    onSubmit?: (fields: DiametroUpdateFormInputValues) => DiametroUpdateFormInputValues;
    onSuccess?: (fields: DiametroUpdateFormInputValues) => void;
    onError?: (fields: DiametroUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiametroUpdateFormInputValues) => DiametroUpdateFormInputValues;
    onValidate?: DiametroUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DiametroUpdateForm(props: DiametroUpdateFormProps): React.ReactElement;
