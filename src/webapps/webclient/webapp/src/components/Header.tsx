import React, { FC } from "react";
import { Box, Text } from "theme-ui";

interface IHeader {
  label: string;
}

export const Header: FC<IHeader> = ({ label }) => {
  return (
    <Box
      sx={{
        backgroundColor: "headerBackground",
        paddingX: "8px",
        paddingY: "12px",
      }}
    >
        <Box sx={{height:"38px"}} />
      <Text sx={{ fontWeight: "bold", fontSize: "22px", color: "#666" }}>
        {label}
      </Text>
    </Box>
  );
};
