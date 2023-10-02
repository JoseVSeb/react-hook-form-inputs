import { TextFieldProps } from "@mui/material/TextField";
import { useMemo } from "react";
import {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

export type TextFieldRenderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Pick<
  ControllerRenderProps<TFieldValues, TName>,
  "name" | "onBlur" | "onChange" | "value" | "disabled"
> &
  Required<Pick<TextFieldProps, "inputRef" | "error">> &
  Pick<TextFieldProps, "helperText">;

export type UseTextFieldControllerReturn<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = { textFieldProps: TextFieldRenderProps<TFieldValues, TName> };

export const useTextFieldController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: UseControllerProps<TFieldValues, TName>,
): UseTextFieldControllerReturn<TFieldValues, TName> => {
  const {
    field: { ref, name, onBlur, onChange, value, disabled },
    fieldState: { invalid, error },
  } = useController(props);

  return useMemo<UseTextFieldControllerReturn<TFieldValues, TName>>(
    () => ({
      textFieldProps: {
        name,
        onBlur,
        onChange,
        value,
        disabled,
        inputRef: ref,
        error: invalid,
        helperText: error?.message,
      },
    }),
    [disabled, error?.message, invalid, name, onBlur, onChange, ref, value],
  );
};
