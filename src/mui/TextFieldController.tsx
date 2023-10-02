import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import {
  UseTextFieldControllerReturn,
  useTextFieldController,
} from "./useTextFieldController";

export type TextFieldControllerProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & {
  children: (
    props: UseTextFieldControllerReturn<TFieldValues, TName>,
  ) => React.ReactElement;
};

export const TextFieldController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  ...props
}: TextFieldControllerProps<TFieldValues, TName>) =>
  children(useTextFieldController(props));
