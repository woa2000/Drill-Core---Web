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
export declare type ConsistenciaCreateFormInputValues = {
    TipoSolo?: string;
};
export declare type ConsistenciaCreateFormValidationValues = {
    TipoSolo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConsistenciaCreateFormOverridesProps = {
    ConsistenciaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TipoSolo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConsistenciaCreateFormProps = React.PropsWithChildren<{
    overrides?: ConsistenciaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConsistenciaCreateFormInputValues) => ConsistenciaCreateFormInputValues;
    onSuccess?: (fields: ConsistenciaCreateFormInputValues) => void;
    onError?: (fields: ConsistenciaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConsistenciaCreateFormInputValues) => ConsistenciaCreateFormInputValues;
    onValidate?: ConsistenciaCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConsistenciaCreateForm(props: ConsistenciaCreateFormProps): React.ReactElement;
