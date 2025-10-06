// src/components/portfolio/TextField.tsx
import * as React from "react";
import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type BaseProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  className?: string;
};

type TextFieldProps = BaseProps &
  (
    | ({ as?: "input" } & React.InputHTMLAttributes<HTMLInputElement>)
    | ({ as: "textarea" } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  );

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    { as = "input", id, name, label, error, className, ...props },
    ref
  ) => {
    const errorClass = error ? "border-destructive" : "";
    const combinedClassName = `${className || ""} ${errorClass}`;

    return (
      <div>
        <Label htmlFor={id} className="mb-2 inline-block">
          {label}
        </Label>
        {as === "textarea" ? (
          <Textarea
            id={id}
            name={name}
            className={combinedClassName}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <Input
            id={id}
            name={name}
            className={combinedClassName}
            ref={ref as React.Ref<HTMLInputElement>}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && <p className="text-destructive text-sm mt-1">{error}</p>}
      </div>
    );
  }
);
TextField.displayName = "TextField";

export default TextField;