import { TextArea, type TextAreaProps } from "./textArea";

interface FieldTextAreaProps extends TextAreaProps {
  label: string;
}

export function FieldTextArea({ label, ...rest }: FieldTextAreaProps) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor={rest.id} className="font-medium">
        {label}
      </label>
      <TextArea {...rest} />
    </div>
  );
}
