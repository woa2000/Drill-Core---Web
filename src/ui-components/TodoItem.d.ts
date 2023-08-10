/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Todo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SwitchFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoItemOverridesProps = {
    TodoItem?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Paragraph?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TodoItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    TodoItem?: String;
    todo?: Todo;
} & {
    overrides?: TodoItemOverridesProps | undefined | null;
}>;
export default function TodoItem(props: TodoItemProps): React.ReactElement;
