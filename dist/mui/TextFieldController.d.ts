/// <reference types="react" />
import { TextFieldProps } from "@mui/material/TextField";
import { ControllerRenderProps, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
type TextFieldRenderProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = Pick<ControllerRenderProps<TFieldValues, TName>, "name" | "onBlur" | "onChange" | "value" | "disabled"> & Required<Pick<TextFieldProps, "inputRef" | "error">> & Pick<TextFieldProps, "helperText">;
type UseTextFieldControllerReturn<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    textFieldProps: TextFieldRenderProps<TFieldValues, TName>;
};
export declare const useTextFieldController: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: UseControllerProps<TFieldValues, TName>) => UseTextFieldControllerReturn<TFieldValues, TName>;
export declare const TextFieldController: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ children, ...props }: UseControllerProps<TFieldValues, TName> & {
    children: (props: UseTextFieldControllerReturn<TFieldValues, TName>) => React.ReactElement;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
//# sourceMappingURL=TextFieldController.d.ts.map