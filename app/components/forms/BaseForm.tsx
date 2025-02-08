import React, { useState, FormEvent, ReactNode } from "react";
import { Button } from "../interface/Button";

export default function BaseForm({
  onSubmit,
  children,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return <form onSubmit={onSubmit}>{children}</form>;
}

export function FormButtonGroup({
  cancelLabel,
  submitLabel,
  cancelFunction,
}: {
  cancelLabel?: string;
  submitLabel?: string;
  cancelFunction: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <Button type="submit">{submitLabel || "Submit"}</Button>
      <Button type="button" onClick={cancelFunction}>
        {cancelLabel || "Cancel"}
      </Button>
    </>
  );
}
