import React from "react";
import { Select, Button, Typography, Space } from "antd";
import { DownOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { StyledPagination } from "./styles";
import { PaginationProps } from "../props";
import { getPaginationNumbers } from "../utils";
const { Text } = Typography;

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  total,
  pageSize,
  pageSizeOptions = [10, 50, 100],
  onPageChange,
  onPageSizeChange,
}) => {
  // use ceil for cases like this -> where the number might not be whole but would need to be rounded up so that user wont miss the data.
  const totalPages = Math.ceil(total / pageSize);

  const startItem = total === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, total);

  const pages = getPaginationNumbers(totalPages, currentPage);

  return (
    <StyledPagination size="middle">
      <Text>
        {startItem}-{endItem} of {total} items
      </Text>

      <Space size="small" align="center">
        <Button
          icon={<LeftOutlined />}
          size="small"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        />

        {pages.map((page, idx) => {
          if (page === "ellipsis") {
            return (
              <Text key={`ellipsis-${idx}`} style={{ userSelect: "none" }}>
                ...
              </Text>
            );
          }
          const isActive = page === currentPage;
          return (
            <Button
              key={page}
              size="small"
              type={isActive ? "default" : "text"}
              style={{
                border: isActive ? "1px solid #1890ff" : undefined,
                fontWeight: isActive ? "bold" : undefined,
                padding: "0 8px",
              }}
              onClick={() => {
                if (!isActive) onPageChange(page as number);
              }}
            >
              {page}
            </Button>
          );
        })}

        <Button
          icon={<RightOutlined />}
          size="small"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        />
      </Space>

      <Select
        size="small"
        value={pageSize}
        onChange={onPageSizeChange}
        options={pageSizeOptions.map((n) => ({
          value: n,
          label: `${n} / page`,
        }))}
        suffixIcon={<DownOutlined />}
        style={{ width: 120 }}
      />
    </StyledPagination>
  );
};
