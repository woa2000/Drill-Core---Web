/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardGOverridesProps = {
    CardG?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product.qec"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product.qjz"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<FlexProps>;
    Ratingmcb?: PrimitiveOverrideProps<RatingProps>;
    Reviews?: PrimitiveOverrideProps<TextProps>;
    "$99/Night"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardGProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CardGOverridesProps | undefined | null;
}>;
export default function CardG(props: CardGProps): React.ReactElement;
