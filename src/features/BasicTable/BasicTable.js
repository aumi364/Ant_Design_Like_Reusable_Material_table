import React from "react";
import Table from "../../component/Table";
import GenerateColumn from "./GenerateColumn";
import usePagination from "./../../hooks/usePagination";

import { Paper } from "@mui/material";
const BasicTable = () => {
  const columns = GenerateColumn();
  const { pageLimit, offset, page, handlePageChange, resetPagination } =
    usePagination();
  return (
    <Table
      columns={columns}
      dataSource={[
        { name: "asif ahmed", id: "1" },
        { name: "pranto vai", id: "2" },
        { name: "saqib bhai", id: "3" },
        { name: "hasnat bhai", id: "4" },
        { name: "toufiq bhai", id: "5" },
        { name: "debashish bhai", id: "6" },
        { name: "binayak dada", id: "7" },
      ]}
      pagination={{
        pageLimit,
        count: 10,
        page,
        handlePageChange,
        resetPagination,
      }}
      config={{
        tableRow: {},
        tableHead: {},
        tableContainer: { sx: { maxHeight: "400px" }, component: Paper },
        table: {
          size: "medium",
          stickyHeader: true,
        },
        tableBody: {},
      }}
    />
  );
};

export default BasicTable;
