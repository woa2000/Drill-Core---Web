/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditProfileOverridesProps = {
    EditProfile?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Edit Profilextk"?: PrimitiveOverrideProps<TextProps>;
    Dividerjnp?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload New Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextFieldcwv?: PrimitiveOverrideProps<TextFieldProps>;
    TextFieldffh?: PrimitiveOverrideProps<TextFieldProps>;
    TextFieldime?: PrimitiveOverrideProps<TextFieldProps>;
    Dividernax?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EditProfileOverridesProps | undefined | null;
}>;
export default function EditProfile(props: EditProfileProps): React.ReactElement;
