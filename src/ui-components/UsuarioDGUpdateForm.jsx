/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UsuarioDG } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsuarioDGUpdateForm(props) {
  const {
    id: idProp,
    usuarioDG: usuarioDGModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    Nome: "",
    UserName: "",
    Email: "",
    Status: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [Nome, setNome] = React.useState(initialValues.Nome);
  const [UserName, setUserName] = React.useState(initialValues.UserName);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Status, setStatus] = React.useState(initialValues.Status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usuarioDGRecord
      ? { ...initialValues, ...usuarioDGRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setNome(cleanValues.Nome);
    setUserName(cleanValues.UserName);
    setEmail(cleanValues.Email);
    setStatus(cleanValues.Status);
    setErrors({});
  };
  const [usuarioDGRecord, setUsuarioDGRecord] =
    React.useState(usuarioDGModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UsuarioDG, idProp)
        : usuarioDGModelProp;
      setUsuarioDGRecord(record);
    };
    queryData();
  }, [idProp, usuarioDGModelProp]);
  React.useEffect(resetStateValues, [usuarioDGRecord]);
  const validations = {
    userID: [],
    Nome: [],
    UserName: [],
    Email: [],
    Status: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userID,
          Nome,
          UserName,
          Email,
          Status,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            UsuarioDG.copyOf(usuarioDGRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsuarioDGUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              Nome,
              UserName,
              Email,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Nome"
        isRequired={false}
        isReadOnly={false}
        value={Nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              Nome: value,
              UserName,
              Email,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.Nome ?? value;
          }
          if (errors.Nome?.hasError) {
            runValidationTasks("Nome", value);
          }
          setNome(value);
        }}
        onBlur={() => runValidationTasks("Nome", Nome)}
        errorMessage={errors.Nome?.errorMessage}
        hasError={errors.Nome?.hasError}
        {...getOverrideProps(overrides, "Nome")}
      ></TextField>
      <TextField
        label="User name"
        isRequired={false}
        isReadOnly={false}
        value={UserName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              Nome,
              UserName: value,
              Email,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.UserName ?? value;
          }
          if (errors.UserName?.hasError) {
            runValidationTasks("UserName", value);
          }
          setUserName(value);
        }}
        onBlur={() => runValidationTasks("UserName", UserName)}
        errorMessage={errors.UserName?.errorMessage}
        hasError={errors.UserName?.hasError}
        {...getOverrideProps(overrides, "UserName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              Nome,
              UserName,
              Email: value,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={Status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              Nome,
              UserName,
              Email,
              Status: value,
            };
            const result = onChange(modelFields);
            value = result?.Status ?? value;
          }
          if (errors.Status?.hasError) {
            runValidationTasks("Status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("Status", Status)}
        errorMessage={errors.Status?.errorMessage}
        hasError={errors.Status?.hasError}
        {...getOverrideProps(overrides, "Status")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || usuarioDGModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usuarioDGModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
