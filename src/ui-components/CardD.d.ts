/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardDOverridesProps = {
    CardD?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Explore?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardDProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CardDOverridesProps | undefined | null;
}>;
export default function CardD(props: CardDProps): React.ReactElement;
