import { Layout } from "antd";
import { RootRouter } from "./routes";

export const HomeContainer = () => {
  return (
    <>
      <Layout>
        <Layout.Header></Layout.Header>
        <Layout.Content>
          <RootRouter />
        </Layout.Content>
      </Layout>
    </>
  );
};
