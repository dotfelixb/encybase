/** @jsxImportSource theme-ui */
import { FC, ReactElement } from "react";
import { Box, Input, Text } from "theme-ui";

/**
 * Command Bar
 * - with Search, New action [popup, internal, external], actions, reports, view [listing, chart]
 * Table
 * stat data
 * Pagination
 */

interface IDataGridHeaderItem {
  label: string;
}

export const DataGridHeaderItem: FC<IDataGridHeaderItem> = (props) => {
  const { label } = props;

  return (
    <th
      sx={{
        padding: 2,
        fontSize: 1,
        color: "#666",
      }}
    >
      {label}
    </th>
  );
};

interface IDataGridHeader {
  children: ReactElement<IDataGridHeaderItem>[];
}

export const DataGridHeader: FC<IDataGridHeader> = (props) => {
  const { children } = props;

  return (
    <thead>
      <tr
        sx={{
          backgroundColor: "infoBackground",
          textAlign: "left",
        }}
      >
        {children}
      </tr>
    </thead>
  );
};

interface IDataGrid {
  newLabel: string;
  data: ReactElement[];
  children?: ReactElement<IDataGridHeader>;
}

export const DataGrid: FC<IDataGrid> = (props) => {
  const { children, data, newLabel } = props;
  const DivBar = () => (
    <Box
      sx={{
        height:"24px",
        width:"2px",
        backgroundColor: "menuBackground",
        marginX:1
      }}
    />
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderColor: "menuBackground",
        borderWidth: 2,
        borderStyle: "solid",
      }}
      role="data grid"
    >
      {/* command bar */}
      <Box
        bg="commandBackground"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "4px",
          padding: "4px",
          fontWeight: "600",
          fontSize: "12px",
          alignItems: "center",
          borderColor: "menuBackground",
          borderWidth: 2,
          borderBottomStyle: "solid",
        }}
        role="data grid command bar"
      >
        {/* left side commands */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Box>
            <Input
              placeholder="Quick Find"
              sx={{
                borderColor: "menuBackground",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: 0,
              }}
            />
          </Box>
          <DivBar />
          <Box>{newLabel}</Box>
          <DivBar />
          <Box>Actions</Box>
          <DivBar />
          <Box>Report</Box>
        </Box>
        {/* right side commands */}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Text>View:</Text>
          </Box>
          <Box>Products</Box>
        </Box>
      </Box>
      <table
        sx={{
          borderSpacing: 0,
          "& tbody tr td": {
            fontSize: 1,
            fontWeight: "500",
            padding: 2,
            borderBottomColor: "borderColor",
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
          },
        }}
      >
        {children}
        <tbody>{data}</tbody>
      </table>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          fontWeight: "500",
          paddingX: 2,
          paddingY: 1,
          cursor: "default",
        }}
      >
        <Box>
          <Text>Previous</Text>
          <Text>{` | Pages: ${1} | `}</Text>
          <Text>Next</Text>
        </Box>
        <Box>
          <Text>Items per page:</Text>
          <Text>{" 5 "}</Text>
          <Text>{" 10 "}</Text>
          <Text>{" 25 "}</Text>
          <Text>{" 50 "}</Text>
          <Text>{" 100 "}</Text>
          <Text>{` | Showing: ${1}-${5} of ${77}`}</Text>
        </Box>
      </Box>
    </Box>
  );
};
