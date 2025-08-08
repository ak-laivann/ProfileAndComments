import React from "react";
import { Card, Avatar, Typography, Row, Col, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { StyledInput } from "./styles";
import { getInitials } from "../utils";
import { ProfileCardProps } from "../props";
const { Title, Text } = Typography;

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Title level={4} style={{ marginBottom: 24 }}>
        <ArrowLeftOutlined onClick={() => navigate("/comments/all")} />
        &nbsp; Welcome, {user.name}
      </Title>

      <Card
        style={{
          padding: "1em",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          borderRadius: 6,
          transition: "box-shadow 0.3s ease",
        }}
      >
        <Row gutter={16} align="middle" style={{ marginBottom: 24 }}>
          <Col>
            <Avatar
              style={{
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "bolder",
              }}
              size={72}
            >
              {getInitials(user.name)}
            </Avatar>
          </Col>
          <Col>
            <Text
              style={{
                marginBottom: 0,
                fontSize: "1.25rem",
                fontWeight: 600,
              }}
            >
              {user.name}
            </Text>
            <br />
            <Text type="secondary">{user.email}</Text>
          </Col>
        </Row>

        <Form
          disabled
          labelCol={{ span: 24 }}
          layout="horizontal"
          size="middle"
        >
          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item label="User ID">
                <StyledInput value={user.id} readOnly />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item label="Name">
                <StyledInput value={user.name} readOnly />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item label="Email ID">
                <StyledInput value={user.email} readOnly />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item label="Address">
                <StyledInput
                  value={`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
                  readOnly
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item label="Phone">
                <StyledInput value={user.phone} readOnly />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};
