/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Orientacao } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OrientacaoCreateForm(props) {
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
    Codigo: "",
    Sigla: "",
    Descricao: "",
    Ativo: false,
  };
  const [Codigo, setCodigo] = React.useState(initialValues.Codigo);
  const [Sigla, setSigla] = React.useState(initialValues.Sigla);
  const [Descricao, setDescricao] = React.useState(initialValues.Descricao);
  const [Ativo, setAtivo] = React.useState(initialValues.Ativo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCodigo(initialValues.Codigo);
    setSigla(initialValues.Sigla);
    setDescricao(initialValues.Descricao);
    setAtivo(initialValues.Ativo);
    setErrors({});
  };
  const validations = {
    Codigo: [{ type: "Required" }],
    Sigla: [{ type: "Required" }],
    Descricao: [],
    Ativo: [{ type: "Required" }],
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
          Codigo,
          Sigla,
          Descricao,
          Ativo,
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
          await DataStore.save(new Orientacao(modelFields));
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
      {...getOverrideProps(overrides, "OrientacaoCreateForm")}
      {...rest}
    >
      <TextField
        label="Codigo"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Codigo}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Codigo: value,
              Sigla,
              Descricao,
              Ativo,
            };
            const result = onChange(modelFields);
            value = result?.Codigo ?? value;
          }
          if (errors.Codigo?.hasError) {
            runValidationTasks("Codigo", value);
          }
          setCodigo(value);
        }}
        onBlur={() => runValidationTasks("Codigo", Codigo)}
        errorMessage={errors.Codigo?.errorMessage}
        hasError={errors.Codigo?.hasError}
        {...getOverrideProps(overrides, "Codigo")}
      ></TextField>
      <TextField
        label="Sigla"
        isRequired={true}
        isReadOnly={false}
        value={Sigla}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Codigo,
              Sigla: value,
              Descricao,
              Ativo,
            };
            const result = onChange(modelFields);
            value = result?.Sigla ?? value;
          }
          if (errors.Sigla?.hasError) {
            runValidationTasks("Sigla", value);
          }
          setSigla(value);
        }}
        onBlur={() => runValidationTasks("Sigla", Sigla)}
        errorMessage={errors.Sigla?.errorMessage}
        hasError={errors.Sigla?.hasError}
        {...getOverrideProps(overrides, "Sigla")}
      ></TextField>
      <TextField
        label="Descricao"
        isRequired={false}
        isReadOnly={false}
        value={Descricao}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Codigo,
              Sigla,
              Descricao: value,
              Ativo,
            };
            const result = onChange(modelFields);
            value = result?.Descricao ?? value;
          }
          if (errors.Descricao?.hasError) {
            runValidationTasks("Descricao", value);
          }
          setDescricao(value);
        }}
        onBlur={() => runValidationTasks("Descricao", Descricao)}
        errorMessage={errors.Descricao?.errorMessage}
        hasError={errors.Descricao?.hasError}
        {...getOverrideProps(overrides, "Descricao")}
      ></TextField>
      <SwitchField
        label="Ativo"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Ativo}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Codigo,
              Sigla,
              Descricao,
              Ativo: value,
            };
            const result = onChange(modelFields);
            value = result?.Ativo ?? value;
          }
          if (errors.Ativo?.hasError) {
            runValidationTasks("Ativo", value);
          }
          setAtivo(value);
        }}
        onBlur={() => runValidationTasks("Ativo", Ativo)}
        errorMessage={errors.Ativo?.errorMessage}
        hasError={errors.Ativo?.hasError}
        {...getOverrideProps(overrides, "Ativo")}
      ></SwitchField>
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
