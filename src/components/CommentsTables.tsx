import { Breakpoint, Tooltip } from "antd";
import { ResponsiveTable } from "./styles";
import { CommentTableProps } from "../props";

export const CommentsTable = ({ data }: CommentTableProps) => {
  const columns = [
    {
      title: "Post ID",
      dataIndex: "postId",
      key: "postId",
      responsive: ["sm"] as Breakpoint[],
      width: "15%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "25%",
      ellipsis: {
        showTitle: false,
      },
      render: (name: string) => (
        <Tooltip placement="topLeft" title={name}>
          {name}
        </Tooltip>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "25%",
      ellipsis: {
        showTitle: false,
      },
      render: (email: string) => (
        <Tooltip placement="topLeft" title={email}>
          {email}
        </Tooltip>
      ),
    },
    {
      title: "Comment",
      dataIndex: "body",
      key: "body",
      render: (text: string) => {
        const words = text.split(" ");
        if (words.length <= 7) return text;
        return words.slice(0, 7).join(" ") + "...";
      },

      onCell: () => ({
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      }),
    },
  ];

  return (
    <ResponsiveTable
      columns={columns}
      dataSource={data}
      rowKey="id"
      pagination={false}
      scroll={{ x: "max-content" }}
    />
  );
};
