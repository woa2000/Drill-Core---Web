/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AmpligramOverridesProps = {
    Ampligram?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    imagefit?: PrimitiveOverrideProps<ImageProps>;
    "Rene Brandel"?: PrimitiveOverrideProps<TextProps>;
    Overflow?: PrimitiveOverrideProps<FlexProps>;
    Icongbx?: PrimitiveOverrideProps<ViewProps>;
    Vectorjfu?: PrimitiveOverrideProps<IconProps>;
    imageejj?: PrimitiveOverrideProps<ImageProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    MyIconmvt?: MyIconProps;
    MyIcontyg?: MyIconProps;
    MyIconkou?: MyIconProps;
    Bookmark?: PrimitiveOverrideProps<FlexProps>;
    Iconzib?: PrimitiveOverrideProps<ViewProps>;
    Vectorhvx?: PrimitiveOverrideProps<IconProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Area?: PrimitiveOverrideProps<FlexProps>;
    "Firstname Lastname"?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AmpligramProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AmpligramOverridesProps | undefined | null;
}>;
export default function Ampligram(props: AmpligramProps): React.ReactElement;
