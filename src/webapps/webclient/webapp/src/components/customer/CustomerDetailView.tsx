import React, { FC } from "react";
import { Box, Text } from "theme-ui";
import { PageTab, PageTabPane } from "../PageTab";

interface ICustomerDetailView {}

export const CustomerDetailView: FC<ICustomerDetailView> = () => {
  return (
    <Box sx={{}}>
      <Box sx={{ padding: 2 }}>
        <Text sx={{ fontWeight: "500", fontSize: 3, color: "#666" }}>
          Customer Name or Display Name
        </Text>
        <Box sx={{ height: "60px" }} />
      </Box>
      <PageTab>
        <PageTabPane title="Transactions">
          <div>Customer Transactions</div>
        </PageTabPane>
        <PageTabPane title="Details">
          <div>Details</div>
        </PageTabPane>
        <PageTabPane title="Projects">
          <div>All Projects</div>
        </PageTabPane>
        <PageTabPane title="Fees">
          <div>All Fees</div>
        </PageTabPane>
      </PageTab>
    </Box>
  );
};
