/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Boletim } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BoletimUpdateFormInputValues = {
    Data?: string;
    Inclinacao?: number;
    Azimute?: number;
    HorimetroIncial?: number;
    HorimetroFinal?: number;
};
export declare type BoletimUpdateFormValidationValues = {
    Data?: ValidationFunction<string>;
    Inclinacao?: ValidationFunction<number>;
    Azimute?: ValidationFunction<number>;
    HorimetroIncial?: ValidationFunction<number>;
    HorimetroFinal?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoletimUpdateFormOverridesProps = {
    BoletimUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Data?: PrimitiveOverrideProps<TextFieldProps>;
    Inclinacao?: PrimitiveOverrideProps<TextFieldProps>;
    Azimute?: PrimitiveOverrideProps<TextFieldProps>;
    HorimetroIncial?: PrimitiveOverrideProps<TextFieldProps>;
    HorimetroFinal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BoletimUpdateFormProps = React.PropsWithChildren<{
    overrides?: BoletimUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    boletim?: Boletim;
    onSubmit?: (fields: BoletimUpdateFormInputValues) => BoletimUpdateFormInputValues;
    onSuccess?: (fields: BoletimUpdateFormInputValues) => void;
    onError?: (fields: BoletimUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BoletimUpdateFormInputValues) => BoletimUpdateFormInputValues;
    onValidate?: BoletimUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BoletimUpdateForm(props: BoletimUpdateFormProps): React.ReactElement;
