/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Projeto } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProjetoUpdateForm(props) {
  const {
    id: idProp,
    projeto: projetoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    NomeProjeto: "",
  };
  const [NomeProjeto, setNomeProjeto] = React.useState(
    initialValues.NomeProjeto
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projetoRecord
      ? { ...initialValues, ...projetoRecord }
      : initialValues;
    setNomeProjeto(cleanValues.NomeProjeto);
    setErrors({});
  };
  const [projetoRecord, setProjetoRecord] = React.useState(projetoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Projeto, idProp)
        : projetoModelProp;
      setProjetoRecord(record);
    };
    queryData();
  }, [idProp, projetoModelProp]);
  React.useEffect(resetStateValues, [projetoRecord]);
  const validations = {
    NomeProjeto: [{ type: "Required" }],
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
          NomeProjeto,
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
            Projeto.copyOf(projetoRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProjetoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nome projeto"
        isRequired={true}
        isReadOnly={false}
        value={NomeProjeto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NomeProjeto: value,
            };
            const result = onChange(modelFields);
            value = result?.NomeProjeto ?? value;
          }
          if (errors.NomeProjeto?.hasError) {
            runValidationTasks("NomeProjeto", value);
          }
          setNomeProjeto(value);
        }}
        onBlur={() => runValidationTasks("NomeProjeto", NomeProjeto)}
        errorMessage={errors.NomeProjeto?.errorMessage}
        hasError={errors.NomeProjeto?.hasError}
        {...getOverrideProps(overrides, "NomeProjeto")}
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
          isDisabled={!(idProp || projetoModelProp)}
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
              !(idProp || projetoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
