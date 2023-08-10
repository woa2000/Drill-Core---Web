/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardEOverridesProps = {
    CardE?: PrimitiveOverrideProps<FlexProps>;
    Corners?: PrimitiveOverrideProps<ViewProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    "Classic Long Sleeve"?: PrimitiveOverrideProps<TextProps>;
    $99?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardEProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CardEOverridesProps | undefined | null;
}>;
export default function CardE(props: CardEProps): React.ReactElement;
