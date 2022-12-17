import React, { FC } from "react";
import { Box, Text } from "theme-ui";
import { DataGrid, DataGridHeader, DataGridHeaderItem } from "./DataGrid";

interface ICustomerDataGrid {}

const rows = [
  {
    name: "Tani",
    displayas: "Tani Ventures",
    openbalance: 123.34,
    closebalance: 456.2,
  },
  {
    name: "Kelvin",
    displayas: "Oslo Travels",
    openbalance: 338.34,
    closebalance: 236.02,
  },
];

export const CustomerDataGrid: FC<ICustomerDataGrid> = () => {
  const data = rows.map((r) => (
    <tr key={r.name}>
      <td>{r.name}</td>
      <td>{r.displayas}</td>
      <td>{r.openbalance}</td>
      <td>{r.closebalance}</td>
    </tr>
  ));

  return (
    <Box>
      <Box sx={{ padding: 1 }}>
        <Text sx={{ fontSize: 1 }}>Listing of Customers</Text>
      </Box>
      <DataGrid newLabel="New Customer" data={data}>
        <DataGridHeader>
          <DataGridHeaderItem label="Name" />
          <DataGridHeaderItem label="Display As" />
          <DataGridHeaderItem label="Open Balance" />
          <DataGridHeaderItem label="Closing Balance" />
        </DataGridHeader>
      </DataGrid>
    </Box>
  );
};
