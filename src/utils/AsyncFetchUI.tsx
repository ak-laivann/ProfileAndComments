import { Alert } from "antd";
import React from "react";
import { Spinner } from "../components";

interface AsyncUIWrapperProps {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
  error: Error | null;
}

export const AsyncUIWrapper: React.FC<AsyncUIWrapperProps> = ({
  isLoading,
  isError,
  children,
  error,
}) => {
  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <Alert style={{ margin: "5rem" }} type="error" message={error?.message} />
    );
  return <>{children}</>;
};
