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
export declare type BoletimCreateFormInputValues = {
    Data?: string;
    Inclinacao?: number;
    Azimute?: number;
    HorimetroIncial?: number;
    HorimetroFinal?: number;
};
export declare type BoletimCreateFormValidationValues = {
    Data?: ValidationFunction<string>;
    Inclinacao?: ValidationFunction<number>;
    Azimute?: ValidationFunction<number>;
    HorimetroIncial?: ValidationFunction<number>;
    HorimetroFinal?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoletimCreateFormOverridesProps = {
    BoletimCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Data?: PrimitiveOverrideProps<TextFieldProps>;
    Inclinacao?: PrimitiveOverrideProps<TextFieldProps>;
    Azimute?: PrimitiveOverrideProps<TextFieldProps>;
    HorimetroIncial?: PrimitiveOverrideProps<TextFieldProps>;
    HorimetroFinal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BoletimCreateFormProps = React.PropsWithChildren<{
    overrides?: BoletimCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BoletimCreateFormInputValues) => BoletimCreateFormInputValues;
    onSuccess?: (fields: BoletimCreateFormInputValues) => void;
    onError?: (fields: BoletimCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BoletimCreateFormInputValues) => BoletimCreateFormInputValues;
    onValidate?: BoletimCreateFormValidationValues;
} & React.CSSProperties>;
export default function BoletimCreateForm(props: BoletimCreateFormProps): React.ReactElement;
