import React, { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Box } from "theme-ui";
import {
  CustomerDataGrid,
  Header,
  PageTab,
  PageTabPane,
} from "../../components";

interface IListSales {}

export const ListSales: FC<IListSales> = () => {
  const [searchParams] = useSearchParams()
  const tab = searchParams.get("tab") ?? "0"
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header label="Sales" />
      <PageTab preSelectedIndex={+tab}>
        <PageTabPane title="Overview">
          <div>Sales Overview</div>
        </PageTabPane>
        <PageTabPane title="Sales Entries">
          <div>All Sales Transactions</div>
        </PageTabPane>
        <PageTabPane title="Customer">
          <CustomerDataGrid />
        </PageTabPane>
        <PageTabPane title="Payment">
          <div>Payment</div>
        </PageTabPane>
        <PageTabPane title="Products & Services">
          <div>Products</div>
        </PageTabPane>
      </PageTab>
    </Box>
  );
};
