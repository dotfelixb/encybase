import React, { FC } from "react";
import { Box } from "theme-ui";
import { CustomerDataGrid,  Header, MenuTab, MenuTabPane } from "../../components";

interface IListSales {}

export const ListSales: FC<IListSales> = () => (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Header label="Sales" />
    <MenuTab>
      <MenuTabPane title="Customer">
        <CustomerDataGrid />
      </MenuTabPane>
      <MenuTabPane title="Overview">
        <div>Overview</div>
      </MenuTabPane>
      <MenuTabPane title="All Sales">
        <div>All Sales</div>
      </MenuTabPane>
      <MenuTabPane title="Payment">
        <div>Payment</div>
      </MenuTabPane>
      <MenuTabPane title="Products & Services">
        <div>Products</div>
      </MenuTabPane>
    </MenuTab>
  </Box>
);
