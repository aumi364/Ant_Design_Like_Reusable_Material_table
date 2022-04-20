import { Typography } from "@mui/material";
import React from "react";

const GenerateColumn = () => {
  return [
    {
      title: "id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "name",
      key: "name",
      dataIndex: "name",
      configColumn: {
        sx: {
          color: "red",
        },
        align: "center",
      },
      render: (name) => {
        return <Typography>{name}</Typography>;
      },
    },
    {
      title: "employyed id",
      key: "employyed_id",
      dataIndex: "",
      render: ({ id, name }) => {
        return <Typography>{`${name}-${id}`}</Typography>;
      },
    },
  ];
};

export default GenerateColumn;
