/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Consistencia } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ConsistenciaUpdateForm(props) {
  const {
    id: idProp,
    consistencia: consistenciaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    TipoSolo: "",
  };
  const [TipoSolo, setTipoSolo] = React.useState(initialValues.TipoSolo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = consistenciaRecord
      ? { ...initialValues, ...consistenciaRecord }
      : initialValues;
    setTipoSolo(cleanValues.TipoSolo);
    setErrors({});
  };
  const [consistenciaRecord, setConsistenciaRecord] = React.useState(
    consistenciaModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Consistencia, idProp)
        : consistenciaModelProp;
      setConsistenciaRecord(record);
    };
    queryData();
  }, [idProp, consistenciaModelProp]);
  React.useEffect(resetStateValues, [consistenciaRecord]);
  const validations = {
    TipoSolo: [],
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
          TipoSolo,
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
          await DataStore.save(
            Consistencia.copyOf(consistenciaRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ConsistenciaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tipo solo"
        isRequired={false}
        isReadOnly={false}
        value={TipoSolo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TipoSolo: value,
            };
            const result = onChange(modelFields);
            value = result?.TipoSolo ?? value;
          }
          if (errors.TipoSolo?.hasError) {
            runValidationTasks("TipoSolo", value);
          }
          setTipoSolo(value);
        }}
        onBlur={() => runValidationTasks("TipoSolo", TipoSolo)}
        errorMessage={errors.TipoSolo?.errorMessage}
        hasError={errors.TipoSolo?.hasError}
        {...getOverrideProps(overrides, "TipoSolo")}
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
          isDisabled={!(idProp || consistenciaModelProp)}
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
              !(idProp || consistenciaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
