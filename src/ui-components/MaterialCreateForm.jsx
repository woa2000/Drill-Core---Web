/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Material } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MaterialCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    NomeMaterial: "",
    Unidade: "",
  };
  const [NomeMaterial, setNomeMaterial] = React.useState(
    initialValues.NomeMaterial
  );
  const [Unidade, setUnidade] = React.useState(initialValues.Unidade);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNomeMaterial(initialValues.NomeMaterial);
    setUnidade(initialValues.Unidade);
    setErrors({});
  };
  const validations = {
    NomeMaterial: [{ type: "Required" }],
    Unidade: [{ type: "Required" }],
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
          NomeMaterial,
          Unidade,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Material(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MaterialCreateForm")}
      {...rest}
    >
      <TextField
        label="Nome material"
        isRequired={true}
        isReadOnly={false}
        value={NomeMaterial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NomeMaterial: value,
              Unidade,
            };
            const result = onChange(modelFields);
            value = result?.NomeMaterial ?? value;
          }
          if (errors.NomeMaterial?.hasError) {
            runValidationTasks("NomeMaterial", value);
          }
          setNomeMaterial(value);
        }}
        onBlur={() => runValidationTasks("NomeMaterial", NomeMaterial)}
        errorMessage={errors.NomeMaterial?.errorMessage}
        hasError={errors.NomeMaterial?.hasError}
        {...getOverrideProps(overrides, "NomeMaterial")}
      ></TextField>
      <TextField
        label="Unidade"
        isRequired={true}
        isReadOnly={false}
        value={Unidade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NomeMaterial,
              Unidade: value,
            };
            const result = onChange(modelFields);
            value = result?.Unidade ?? value;
          }
          if (errors.Unidade?.hasError) {
            runValidationTasks("Unidade", value);
          }
          setUnidade(value);
        }}
        onBlur={() => runValidationTasks("Unidade", Unidade)}
        errorMessage={errors.Unidade?.errorMessage}
        hasError={errors.Unidade?.hasError}
        {...getOverrideProps(overrides, "Unidade")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
