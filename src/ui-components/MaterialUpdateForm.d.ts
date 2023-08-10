/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Material } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MaterialUpdateFormInputValues = {
    NomeMaterial?: string;
    Unidade?: string;
};
export declare type MaterialUpdateFormValidationValues = {
    NomeMaterial?: ValidationFunction<string>;
    Unidade?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaterialUpdateFormOverridesProps = {
    MaterialUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeMaterial?: PrimitiveOverrideProps<TextFieldProps>;
    Unidade?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MaterialUpdateFormProps = React.PropsWithChildren<{
    overrides?: MaterialUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    material?: Material;
    onSubmit?: (fields: MaterialUpdateFormInputValues) => MaterialUpdateFormInputValues;
    onSuccess?: (fields: MaterialUpdateFormInputValues) => void;
    onError?: (fields: MaterialUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MaterialUpdateFormInputValues) => MaterialUpdateFormInputValues;
    onValidate?: MaterialUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MaterialUpdateForm(props: MaterialUpdateFormProps): React.ReactElement;
