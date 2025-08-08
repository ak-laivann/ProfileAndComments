import { Avatar, Col, Layout, Row, Typography } from "antd";
import { RootRouter } from "./routes";
import { AsyncUIWrapper, getInitials } from "./utils";
import { useUsers } from "./hooks/useUsers";
import { useUserStore } from "./store/userStore";
import { StyledHeader, StyledContent } from "./components";
const { Text } = Typography;

export const HomeContainer = () => {
  const { isLoading, isError, error } = useUsers();
  const { user } = useUserStore();

  return (
    <Layout style={{ background: "white" }}>
      <StyledHeader>
        <img
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to clear localStorage and refresh?"
              )
            ) {
              localStorage.clear();
              window.location.reload();
            }
          }}
          src="/SwiftLogo.png"
          alt="Logo"
          style={{ height: 48, userSelect: "none", padding: "0rem 0.25rem" }}
        />
        <AsyncUIWrapper isError={isError} isLoading={isLoading} error={error}>
          <Row gutter={16} align="middle">
            <Col>
              <Avatar
                style={{
                  background: "white",
                  color: "black",
                  fontWeight: "bolder",
                }}
                size={42}
              >
                {getInitials(user?.name ?? "")}
              </Avatar>
            </Col>
            <Col>
              <Text style={{ color: "white" }}>{user?.name}</Text>
            </Col>
          </Row>
        </AsyncUIWrapper>
      </StyledHeader>
      <AsyncUIWrapper isError={isError} isLoading={isLoading} error={error}>
        <StyledContent>
          <RootRouter />
        </StyledContent>
      </AsyncUIWrapper>
    </Layout>
  );
};
