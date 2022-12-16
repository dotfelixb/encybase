import {
  faGauge,
  faMoneyBill1,
  faTags,
  faIdCardClip,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box, Text } from "theme-ui";
import { NavLink } from "./NavLink";

const navList = [
  {
    label: "Dashboard",
    location: "/",
    icon: faGauge,
  },
  {
    label: "Banking",
    location: "/banking",
    icon: faMoneyBill1,
  },
  {
    label: "Sales",
    location: "/sales",
    icon: faTags,
  },
  {
    label: "Expenses",
    location: "/expenses",
    icon: faCreditCard,
  },
  {
    label: "Payroll",
    location: "/payroll",
    icon: faIdCardClip,
  },
];

interface IMainLayout extends React.PropsWithChildren {}

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  const navs = navList.map((n) => (
    <NavLink
      key={n.label}
      label={n.label}
      location={n.location}
      icon={n.icon}
    />
  ));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "48px",
          color: "white",
          backgroundColor: "appBackground",
        }}
      >
        <Text>Header</Text>
      </Box>
      {/* container */}
      <Box sx={{ display: "flex", flex: 1, flexDirection: "row",  }}>
        {/* nav bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "72px",
            backgroundColor: "infoBackground",
          }}
        >
          <Box sx={{ flex: 1, padding: "4px" }}>{navs}</Box>
        </Box>
        {/* content */}
        <Box sx={{ flex: 1 }}>
          {children}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
