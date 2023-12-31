import { TextFieldProps } from "@mui/material/TextField";
import { useMemo } from "react";
import {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type TextFieldRenderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Pick<
  ControllerRenderProps<TFieldValues, TName>,
  "name" | "onBlur" | "onChange" | "value" | "disabled"
> &
  Required<Pick<TextFieldProps, "inputRef" | "error">> &
  Pick<TextFieldProps, "helperText">;

type TextFieldControllerReturn<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = [TextFieldRenderProps<TFieldValues, TName>];

export const useTextFieldController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: UseControllerProps<TFieldValues, TName>,
): TextFieldControllerReturn<TFieldValues, TName> => {
  const params = useController(props);
  const {
    field: { ref, name, onBlur, onChange, value, disabled },
    fieldState: { invalid, error },
  } = params;

  return useMemo<TextFieldControllerReturn<TFieldValues, TName>>(
    () => [
      {
        name,
        onBlur,
        onChange,
        value,
        disabled,
        inputRef: ref,
        error: invalid,
        helperText: error?.message,
      },
    ],
    [disabled, error?.message, invalid, name, onBlur, onChange, ref, value],
  );
};

export const TextFieldController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  ...props
}: UseControllerProps<TFieldValues, TName> & {
  children: (
    ...props: TextFieldControllerReturn<TFieldValues, TName>
  ) => React.ReactElement;
}) => children(...useTextFieldController(props));
