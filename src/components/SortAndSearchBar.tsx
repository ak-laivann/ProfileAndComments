import React from "react";
import { Button, Input, Col, Space } from "antd";
import { UpOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { StyledRow } from "./styles";
import { SearchBarProps, SortColumn } from "../props";

const sortOptions = [
  { key: "postId", label: "Sort Post ID" },
  { key: "name", label: "Sort Name" },
  { key: "email", label: "Sort Email" },
];

export const SortAndSearchBar: React.FC<SearchBarProps> = ({
  sortColumn,
  sortDirection,
  onSortToggle,
  searchValue,
  onSearchChange,
}) => {
  return (
    <StyledRow gutter={[128, 24]} align="middle" justify="space-between">
      <Col xs={24} sm={12}>
        <Space wrap>
          {sortOptions.map(({ key, label }) => (
            <Button
              key={key}
              size="small"
              type={sortColumn === key ? "primary" : "default"}
              onClick={() => onSortToggle(key as SortColumn)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow:
                  sortColumn === key
                    ? "0 4px 8px rgba(24, 144, 255, 0.3)"
                    : "0 1px 3px rgba(0,0,0,0.3)",
                borderRadius: 6,
                transition: "box-shadow 0.3s ease",
              }}
            >
              <span>{label}</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 4,
                }}
              >
                <UpOutlined
                  style={{
                    color:
                      sortColumn === key && sortDirection === "asc"
                        ? "white"
                        : sortColumn === key && sortDirection === "desc"
                        ? "#1890ff"
                        : "black",
                    fontSize: 6,
                    marginBottom: 2,
                  }}
                />
                <DownOutlined
                  style={{
                    color:
                      sortColumn === key && sortDirection === "desc"
                        ? "white"
                        : sortColumn === key && sortDirection === "asc"
                        ? "#1890ff"
                        : "black",
                    fontSize: 6,
                    marginTop: 2,
                  }}
                />
              </div>
            </Button>
          ))}
        </Space>
      </Col>

      <Col xs={24} sm={12} style={{ textAlign: "center" }}>
        <Input
          size="large"
          placeholder="Search name, email or comment"
          prefix={<SearchOutlined />}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          allowClear
          style={{
            width: "100%",
            boxShadow: !!searchValue
              ? "0 4px 8px rgba(24, 144, 255, 0.3)"
              : "0 1px 3px rgba(0,0,0,0.3)",
            borderRadius: 6,
            transition: "box-shadow 0.3s ease",
          }}
        />
      </Col>
    </StyledRow>
  );
};
