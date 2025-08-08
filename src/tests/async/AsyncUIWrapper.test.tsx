import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AsyncUIWrapper } from "../../utils";

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Alert: jest.fn(({ message }) => <div>{message}</div>),
}));

jest.mock("../../components", () => ({
  ...jest.requireActual("../../components"),
  Spinner: () => <div>Loading...</div>,
}));

const ChildComponent = () => <div>Hello from a child component</div>;

describe("AsyncUIWrapper", () => {
  it("should render a loading spinner when isLoading is true", () => {
    render(
      <AsyncUIWrapper isLoading={true} isError={false} error={null}>
        <ChildComponent />
      </AsyncUIWrapper>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(
      screen.queryByText("Hello from a child component")
    ).not.toBeInTheDocument();
  });

  it("should render an error message when isError is true", () => {
    const mockError = new Error("This is a test error");
    render(
      <AsyncUIWrapper isLoading={false} isError={true} error={mockError}>
        <ChildComponent />
      </AsyncUIWrapper>
    );

    expect(screen.getByText("This is a test error")).toBeInTheDocument();
    expect(
      screen.queryByText("Hello from a child component")
    ).not.toBeInTheDocument();
  });

  it("should render children when not loading and not in an error state", () => {
    render(
      <AsyncUIWrapper isLoading={false} isError={false} error={null}>
        <ChildComponent />
      </AsyncUIWrapper>
    );

    expect(
      screen.getByText("Hello from a child component")
    ).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("This is a test error")).not.toBeInTheDocument();
  });
});
