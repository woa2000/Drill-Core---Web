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
import { Cliente } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ClienteUpdateForm(props) {
  const {
    id: idProp,
    cliente: clienteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    NomeCliente: "",
    LogoClient: "",
    Ativo: false,
  };
  const [NomeCliente, setNomeCliente] = React.useState(
    initialValues.NomeCliente
  );
  const [LogoClient, setLogoClient] = React.useState(initialValues.LogoClient);
  const [Ativo, setAtivo] = React.useState(initialValues.Ativo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clienteRecord
      ? { ...initialValues, ...clienteRecord }
      : initialValues;
    setNomeCliente(cleanValues.NomeCliente);
    setLogoClient(cleanValues.LogoClient);
    setAtivo(cleanValues.Ativo);
    setErrors({});
  };
  const [clienteRecord, setClienteRecord] = React.useState(clienteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Cliente, idProp)
        : clienteModelProp;
      setClienteRecord(record);
    };
    queryData();
  }, [idProp, clienteModelProp]);
  React.useEffect(resetStateValues, [clienteRecord]);
  const validations = {
    NomeCliente: [{ type: "Required" }],
    LogoClient: [],
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
          NomeCliente,
          LogoClient,
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
          await DataStore.save(
            Cliente.copyOf(clienteRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ClienteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nome cliente"
        isRequired={true}
        isReadOnly={false}
        value={NomeCliente}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NomeCliente: value,
              LogoClient,
              Ativo,
            };
            const result = onChange(modelFields);
            value = result?.NomeCliente ?? value;
          }
          if (errors.NomeCliente?.hasError) {
            runValidationTasks("NomeCliente", value);
          }
          setNomeCliente(value);
        }}
        onBlur={() => runValidationTasks("NomeCliente", NomeCliente)}
        errorMessage={errors.NomeCliente?.errorMessage}
        hasError={errors.NomeCliente?.hasError}
        {...getOverrideProps(overrides, "NomeCliente")}
      ></TextField>
      <TextField
        label="Logo client"
        isRequired={false}
        isReadOnly={false}
        value={LogoClient}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NomeCliente,
              LogoClient: value,
              Ativo,
            };
            const result = onChange(modelFields);
            value = result?.LogoClient ?? value;
          }
          if (errors.LogoClient?.hasError) {
            runValidationTasks("LogoClient", value);
          }
          setLogoClient(value);
        }}
        onBlur={() => runValidationTasks("LogoClient", LogoClient)}
        errorMessage={errors.LogoClient?.errorMessage}
        hasError={errors.LogoClient?.hasError}
        {...getOverrideProps(overrides, "LogoClient")}
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
              NomeCliente,
              LogoClient,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || clienteModelProp)}
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
              !(idProp || clienteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
