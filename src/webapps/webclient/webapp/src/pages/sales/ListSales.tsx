import { FC } from "react";
import { Box } from "theme-ui";
import {
  CustomerDataGrid,
  CustomerDetailView,
  Header,
  PageTab,
  PageTabPane,
} from "../../components";

interface IListSales {}

export const ListSales: FC<IListSales> = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header label="Sales" />
      <PageTab appendTab={true}>
        <PageTabPane title="Overview">
          <div>Sales Overview</div>
        </PageTabPane>
        <PageTabPane title="Invoice">
          <div>Invoice</div>
        </PageTabPane>
        <PageTabPane title="Estimates">
          <div>Estimates</div>
        </PageTabPane>
        <PageTabPane title="Sales Entries">
          <div>All Sales Transactions</div>
        </PageTabPane>
        <PageTabPane title="Customers">
          <div>
            <CustomerDataGrid />
            <CustomerDetailView />
          </div>
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
