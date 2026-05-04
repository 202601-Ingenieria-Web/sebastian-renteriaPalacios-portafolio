import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

type ProgressWithLabelProps = {
  readonly label: string;
  readonly value: number;
  readonly id?: string;
}

export function ProgressWithLabel({ label, value, id }: ProgressWithLabelProps) {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor={id}>
        <span>{label}</span>
        <span className="ml-auto">{value}%</span>
      </FieldLabel>
      <Progress value={value} id={id}  className="[&>div]:bg-blue-500"/>
    </Field>
  )
}
