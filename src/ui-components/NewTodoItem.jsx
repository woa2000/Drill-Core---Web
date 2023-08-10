/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SwitchField, Text } from "@aws-amplify/ui-react";
export default function NewTodoItem(props) {
  const { Todo, todo, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NewTodoItem")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="580px"
        height="124px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={todo?.name}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          height="94px"
          grow="1"
          basis="94px"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={todo?.description}
          {...getOverrideProps(overrides, "Paragraph")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        height="124px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Check")}
      >
        <SwitchField
          display="flex"
          gap="8px"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          label="On"
          size="default"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          checked={todo?.isComplete}
          {...getOverrideProps(overrides, "SwitchField")}
        ></SwitchField>
      </Flex>
    </Flex>
  );
}
