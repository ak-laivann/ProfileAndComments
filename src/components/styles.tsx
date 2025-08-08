import { Input, Layout, Row, Space, Table } from "antd";
import styled from "styled-components";

export const ResponsiveTable = styled(Table)`
  .ant-table-wrapper {
    overflow-x: auto;
  }
`;

export const StyledPagination = styled(Space)`
  display: flex;
  justify-content: end;
  padding: 1rem 0;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0;
  }
`;

export const StyledInput = styled(Input)`
  &.ant-input[disabled] {
    color: black !important;
  }
`;

export const StyledRow = styled(Row)`
  margin-bottom: 16px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 5rem;
`;

export const SpinnerCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-radius: 50%;
  animation: spin 2s linear infinite, colorChange 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes colorChange {
    0% {
      border-top-color: #ff6b6b;
    }
    25% {
      border-top-color: #feca57;
    }
    50% {
      border-top-color: #1dd1a1;
    }
    75% {
      border-top-color: #54a0ff;
    }
    100% {
      border-top-color: #ff6b6b;
    }
  }
`;

export const StyledContent = styled(Layout.Content)`
  position: relative;
  top: 5rem;
  padding: 1rem 5rem;
  overflow-y: auto;

  @media (max-width: 700px) {
    padding: 1rem 1rem;
  }
`;

export const StyledHeader = styled(Layout.Header)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 0.5rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #373b64ff;
  line-height: 0px;

  @media (max-width: 700px) {
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
    height: auto;
  }
`;
