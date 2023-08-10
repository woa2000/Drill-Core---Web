/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Sonda } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SondaUpdateFormInputValues = {
    NomeSonda?: string;
    Ativo?: boolean;
};
export declare type SondaUpdateFormValidationValues = {
    NomeSonda?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SondaUpdateFormOverridesProps = {
    SondaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NomeSonda?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SondaUpdateFormProps = React.PropsWithChildren<{
    overrides?: SondaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sonda?: Sonda;
    onSubmit?: (fields: SondaUpdateFormInputValues) => SondaUpdateFormInputValues;
    onSuccess?: (fields: SondaUpdateFormInputValues) => void;
    onError?: (fields: SondaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SondaUpdateFormInputValues) => SondaUpdateFormInputValues;
    onValidate?: SondaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SondaUpdateForm(props: SondaUpdateFormProps): React.ReactElement;
