/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import NewTodoItem from "./NewTodoItem";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function TodoItensCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "TodoItensCollection")}
    >
      {(item, index) => (
        <NewTodoItem
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></NewTodoItem>
      )}
    </Collection>
  );
}
