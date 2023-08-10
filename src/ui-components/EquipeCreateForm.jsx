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
import { Equipe } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EquipeCreateForm(props) {
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
    Nome: "",
    Funcao: "",
    Ativo: false,
  };
  const [Nome, setNome] = React.useState(initialValues.Nome);
  const [Funcao, setFuncao] = React.useState(initialValues.Funcao);
  const [Ativo, setAtivo] = React.useState(initialValues.Ativo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNome(initialValues.Nome);
    setFuncao(initialValues.Funcao);
    setAtivo(initialValues.Ativo);
    setErrors({});
  };
  const validations = {
    Nome: [{ type: "Required" }],
    Funcao: [{ type: "Required" }],
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
          Nome,
          Funcao,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Equipe(modelFields));
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
      {...getOverrideProps(overrides, "EquipeCreateForm")}
      {...rest}
    >
      <TextField
        label="Nome"
        isRequired={true}
        isReadOnly={false}
        value={Nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome: value,
              Funcao,
              Ativo,
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
        label="Funcao"
        isRequired={true}
        isReadOnly={false}
        value={Funcao}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Funcao: value,
              Ativo,
            };
            const result = onChange(modelFields);
            value = result?.Funcao ?? value;
          }
          if (errors.Funcao?.hasError) {
            runValidationTasks("Funcao", value);
          }
          setFuncao(value);
        }}
        onBlur={() => runValidationTasks("Funcao", Funcao)}
        errorMessage={errors.Funcao?.errorMessage}
        hasError={errors.Funcao?.hasError}
        {...getOverrideProps(overrides, "Funcao")}
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
              Nome,
              Funcao,
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
