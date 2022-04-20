import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import TablePagination from "@mui/material/TablePagination";

const CustomTable = ({ loading, dataSource, pagination, columns, config }) => {
  const { tableRow, tableHead, tableContainer, table, tableBody } =
    config || {};
  const { count, page, pageLimit, handlePageChange } = pagination || {};
  return (
    <Box>
      {columns && dataSource && (
        <TableContainer {...tableContainer}>
          <Table {...table}>
            <TableHead {...tableHead}>
              <TableRow {...tableRow}>
                {columns?.length > 0 &&
                  columns?.map((column) => {
                    const { key, title, filterComponent, configColumn } =
                      column || {};
                    const { component, alignment } = filterComponent || {};

                    return (
                      <TableCell key={key} {...configColumn}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent:
                              configColumn?.align === "center"
                                ? "center"
                                : "flex-start" &&
                                  configColumn?.align === "right"
                                ? "flex-end"
                                : "flex-start",
                          }}
                        >
                          <Box>{title}</Box>
                          {filterComponent && (
                            <Box
                              sx={{
                                pl: 1,
                              }}
                            >
                              {component()}
                            </Box>
                          )}
                        </Box>
                      </TableCell>
                    );
                  })}
              </TableRow>
            </TableHead>
            <TableBody {...tableBody}>
              {dataSource?.length > 0 &&
                !loading &&
                dataSource.map((data, index) => {
                  return (
                    <TableRow key={index} {...tableRow}>
                      {columns.map((column) => {
                        const { configColumn, dataIndex, key, render, align } =
                          column || {};
                        // const { fsx, sx, ...restConfigColumn } =
                        //   configColumn || {};

                        let cellData = dataIndex ? data[dataIndex] : data;

                        return (
                          <TableCell
                            key={key}
                            {...configColumn}
                            //{...{ sx, ...fsx(cellData) }}
                          >
                            {render ? render(cellData) : cellData}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              {!loading && dataSource?.length < 1 && "no data found"}
              {loading && "loading"}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {pagination && (
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={count}
          rowsPerPage={pageLimit}
          page={page}
          onPageChange={handlePageChange}
        />
      )}
    </Box>
  );
};

export default CustomTable;

//filter((item)=> item.per_number.includes(searchedData))
