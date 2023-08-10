/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NewTodoItemProps } from "./NewTodoItem";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoItensCollectionOverridesProps = {
    TodoItensCollection?: PrimitiveOverrideProps<CollectionProps>;
    NewTodoItem?: NewTodoItemProps;
} & EscapeHatchProps;
export declare type TodoItensCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NewTodoItemProps;
} & {
    overrides?: TodoItensCollectionOverridesProps | undefined | null;
}>;
export default function TodoItensCollection(props: TodoItensCollectionProps): React.ReactElement;
