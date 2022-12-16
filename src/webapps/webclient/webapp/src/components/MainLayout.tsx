import React, { FC } from "react";
import { Box, Flex } from "theme-ui";

interface INavList {
  label: string;
}

const navList: INavList[] = [
  {
    label: "Dashboard",
  },
  {
    label: "Banking",
  },
];

interface IMainLayout extends React.PropsWithChildren {}

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <Box
      sx={{ display:"flex", flexDirection: "column", width: "100vw", height: "100vh" }}
    >
      <Box
        sx={{
          height: "48px",
          color: "white",
          backgroundColor: "appBackground",
        }}
      >
        Header
      </Box>
      <Box sx={{ display:"flex", flex:1, flexDirection: "row", gap:"2px" }}>
        <Box sx={{ width: "48px", backgroundColor: "infoBackground" }}>
          Nav
        </Box>
        <Box sx={{ flex: 1 }}>Content</Box>
      </Box>
    </Box>
  );
};
