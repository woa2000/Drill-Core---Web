/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Boletim } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BoletimUpdateForm(props) {
  const {
    id: idProp,
    boletim: boletimModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Data: "",
    Inclinacao: "",
    Azimute: "",
    HorimetroIncial: "",
    HorimetroFinal: "",
  };
  const [Data, setData] = React.useState(initialValues.Data);
  const [Inclinacao, setInclinacao] = React.useState(initialValues.Inclinacao);
  const [Azimute, setAzimute] = React.useState(initialValues.Azimute);
  const [HorimetroIncial, setHorimetroIncial] = React.useState(
    initialValues.HorimetroIncial
  );
  const [HorimetroFinal, setHorimetroFinal] = React.useState(
    initialValues.HorimetroFinal
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = boletimRecord
      ? { ...initialValues, ...boletimRecord }
      : initialValues;
    setData(cleanValues.Data);
    setInclinacao(cleanValues.Inclinacao);
    setAzimute(cleanValues.Azimute);
    setHorimetroIncial(cleanValues.HorimetroIncial);
    setHorimetroFinal(cleanValues.HorimetroFinal);
    setErrors({});
  };
  const [boletimRecord, setBoletimRecord] = React.useState(boletimModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Boletim, idProp)
        : boletimModelProp;
      setBoletimRecord(record);
    };
    queryData();
  }, [idProp, boletimModelProp]);
  React.useEffect(resetStateValues, [boletimRecord]);
  const validations = {
    Data: [],
    Inclinacao: [],
    Azimute: [],
    HorimetroIncial: [],
    HorimetroFinal: [],
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
          Data,
          Inclinacao,
          Azimute,
          HorimetroIncial,
          HorimetroFinal,
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
            Boletim.copyOf(boletimRecord, (updated) => {
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
      {...getOverrideProps(overrides, "BoletimUpdateForm")}
      {...rest}
    >
      <TextField
        label="Data"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Data}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Data: value,
              Inclinacao,
              Azimute,
              HorimetroIncial,
              HorimetroFinal,
            };
            const result = onChange(modelFields);
            value = result?.Data ?? value;
          }
          if (errors.Data?.hasError) {
            runValidationTasks("Data", value);
          }
          setData(value);
        }}
        onBlur={() => runValidationTasks("Data", Data)}
        errorMessage={errors.Data?.errorMessage}
        hasError={errors.Data?.hasError}
        {...getOverrideProps(overrides, "Data")}
      ></TextField>
      <TextField
        label="Inclinacao"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Inclinacao}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Data,
              Inclinacao: value,
              Azimute,
              HorimetroIncial,
              HorimetroFinal,
            };
            const result = onChange(modelFields);
            value = result?.Inclinacao ?? value;
          }
          if (errors.Inclinacao?.hasError) {
            runValidationTasks("Inclinacao", value);
          }
          setInclinacao(value);
        }}
        onBlur={() => runValidationTasks("Inclinacao", Inclinacao)}
        errorMessage={errors.Inclinacao?.errorMessage}
        hasError={errors.Inclinacao?.hasError}
        {...getOverrideProps(overrides, "Inclinacao")}
      ></TextField>
      <TextField
        label="Azimute"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Azimute}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Data,
              Inclinacao,
              Azimute: value,
              HorimetroIncial,
              HorimetroFinal,
            };
            const result = onChange(modelFields);
            value = result?.Azimute ?? value;
          }
          if (errors.Azimute?.hasError) {
            runValidationTasks("Azimute", value);
          }
          setAzimute(value);
        }}
        onBlur={() => runValidationTasks("Azimute", Azimute)}
        errorMessage={errors.Azimute?.errorMessage}
        hasError={errors.Azimute?.hasError}
        {...getOverrideProps(overrides, "Azimute")}
      ></TextField>
      <TextField
        label="Horimetro incial"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={HorimetroIncial}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Data,
              Inclinacao,
              Azimute,
              HorimetroIncial: value,
              HorimetroFinal,
            };
            const result = onChange(modelFields);
            value = result?.HorimetroIncial ?? value;
          }
          if (errors.HorimetroIncial?.hasError) {
            runValidationTasks("HorimetroIncial", value);
          }
          setHorimetroIncial(value);
        }}
        onBlur={() => runValidationTasks("HorimetroIncial", HorimetroIncial)}
        errorMessage={errors.HorimetroIncial?.errorMessage}
        hasError={errors.HorimetroIncial?.hasError}
        {...getOverrideProps(overrides, "HorimetroIncial")}
      ></TextField>
      <TextField
        label="Horimetro final"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={HorimetroFinal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Data,
              Inclinacao,
              Azimute,
              HorimetroIncial,
              HorimetroFinal: value,
            };
            const result = onChange(modelFields);
            value = result?.HorimetroFinal ?? value;
          }
          if (errors.HorimetroFinal?.hasError) {
            runValidationTasks("HorimetroFinal", value);
          }
          setHorimetroFinal(value);
        }}
        onBlur={() => runValidationTasks("HorimetroFinal", HorimetroFinal)}
        errorMessage={errors.HorimetroFinal?.errorMessage}
        hasError={errors.HorimetroFinal?.hasError}
        {...getOverrideProps(overrides, "HorimetroFinal")}
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
          isDisabled={!(idProp || boletimModelProp)}
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
              !(idProp || boletimModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
