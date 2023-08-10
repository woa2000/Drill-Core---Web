/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Equipe } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipeUpdateFormInputValues = {
    Nome?: string;
    Funcao?: string;
    Ativo?: boolean;
};
export declare type EquipeUpdateFormValidationValues = {
    Nome?: ValidationFunction<string>;
    Funcao?: ValidationFunction<string>;
    Ativo?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipeUpdateFormOverridesProps = {
    EquipeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    Funcao?: PrimitiveOverrideProps<TextFieldProps>;
    Ativo?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EquipeUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquipeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equipe?: Equipe;
    onSubmit?: (fields: EquipeUpdateFormInputValues) => EquipeUpdateFormInputValues;
    onSuccess?: (fields: EquipeUpdateFormInputValues) => void;
    onError?: (fields: EquipeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipeUpdateFormInputValues) => EquipeUpdateFormInputValues;
    onValidate?: EquipeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquipeUpdateForm(props: EquipeUpdateFormProps): React.ReactElement;
