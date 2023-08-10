/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Consistencia } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConsistenciaUpdateFormInputValues = {
    TipoSolo?: string;
};
export declare type ConsistenciaUpdateFormValidationValues = {
    TipoSolo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConsistenciaUpdateFormOverridesProps = {
    ConsistenciaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TipoSolo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConsistenciaUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConsistenciaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    consistencia?: Consistencia;
    onSubmit?: (fields: ConsistenciaUpdateFormInputValues) => ConsistenciaUpdateFormInputValues;
    onSuccess?: (fields: ConsistenciaUpdateFormInputValues) => void;
    onError?: (fields: ConsistenciaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConsistenciaUpdateFormInputValues) => ConsistenciaUpdateFormInputValues;
    onValidate?: ConsistenciaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConsistenciaUpdateForm(props: ConsistenciaUpdateFormProps): React.ReactElement;
