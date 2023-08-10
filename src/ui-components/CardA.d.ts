/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardAOverridesProps = {
    CardA?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Text Grouping"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    $99?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardAProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CardAOverridesProps | undefined | null;
}>;
export default function CardA(props: CardAProps): React.ReactElement;
