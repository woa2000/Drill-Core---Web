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
import { Atividade } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AtividadeCreateForm(props) {
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
    NomeAtividade: "",
    Codigo: "",
    Tipo: "",
    Ativo: false,
    InfoPerfuracao: false,
  };
  const [NomeAtividade, setNomeAtividade] = React.useState(
    initialValues.NomeAtividade
  );
  const [Codigo, setCodigo] = React.useState(initialValues.Codigo);
  const [Tipo, setTipo] = React.useState(initialValues.Tipo);
  const [Ativo, setAtivo] = React.useState(initialValues.Ativo);
  const [InfoPerfuracao, setInfoPerfuracao] = React.useState(
    initialValues.InfoPerfuracao
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNomeAtividade(initialValues.NomeAtividade);
    setCodigo(initialValues.Codigo);
    setTipo(initialValues.Tipo);
    setAtivo(initialValues.Ativo);
    setInfoPerfuracao(initialValues.InfoPerfuracao);
    setErrors({});
  };
  const validations = {
    NomeAtividade: [{ type: "Required" }],
    Codigo: [{ type: "Required" }],
    Tipo: [{ type: "Required" }],
    Ativo: [{ type: "Required" }],
    InfoPerfuracao: [],
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
          NomeAtividade,
          Codigo,
          Tipo,
          Ativo,
          InfoPerfuracao,
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
          await DataStore.save(new Atividade(modelFields));
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
      {...getOverrideProps(overrides, "AtividadeCreateForm")}
      {...rest}
    >
      <TextField
        label="Nome atividade"
        isRequired={true}
        isReadOnly={false}
        value={NomeAtividade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NomeAtividade: value,
              Codigo,
              Tipo,
              Ativo,
              InfoPerfuracao,
            };
            const result = onChange(modelFields);
            value = result?.NomeAtividade ?? value;
          }
          if (errors.NomeAtividade?.hasError) {
            runValidationTasks("NomeAtividade", value);
          }
          setNomeAtividade(value);
        }}
        onBlur={() => runValidationTasks("NomeAtividade", NomeAtividade)}
        errorMessage={errors.NomeAtividade?.errorMessage}
        hasError={errors.NomeAtividade?.hasError}
        {...getOverrideProps(overrides, "NomeAtividade")}
      ></TextField>
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
              NomeAtividade,
              Codigo: value,
              Tipo,
              Ativo,
              InfoPerfuracao,
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
        label="Tipo"
        isRequired={true}
        isReadOnly={false}
        value={Tipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NomeAtividade,
              Codigo,
              Tipo: value,
              Ativo,
              InfoPerfuracao,
            };
            const result = onChange(modelFields);
            value = result?.Tipo ?? value;
          }
          if (errors.Tipo?.hasError) {
            runValidationTasks("Tipo", value);
          }
          setTipo(value);
        }}
        onBlur={() => runValidationTasks("Tipo", Tipo)}
        errorMessage={errors.Tipo?.errorMessage}
        hasError={errors.Tipo?.hasError}
        {...getOverrideProps(overrides, "Tipo")}
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
              NomeAtividade,
              Codigo,
              Tipo,
              Ativo: value,
              InfoPerfuracao,
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
      <SwitchField
        label="Info perfuracao"
        defaultChecked={false}
        isDisabled={false}
        isChecked={InfoPerfuracao}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              NomeAtividade,
              Codigo,
              Tipo,
              Ativo,
              InfoPerfuracao: value,
            };
            const result = onChange(modelFields);
            value = result?.InfoPerfuracao ?? value;
          }
          if (errors.InfoPerfuracao?.hasError) {
            runValidationTasks("InfoPerfuracao", value);
          }
          setInfoPerfuracao(value);
        }}
        onBlur={() => runValidationTasks("InfoPerfuracao", InfoPerfuracao)}
        errorMessage={errors.InfoPerfuracao?.errorMessage}
        hasError={errors.InfoPerfuracao?.hasError}
        {...getOverrideProps(overrides, "InfoPerfuracao")}
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
