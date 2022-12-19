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
        paddingX: 2,
        paddingY: 3,
      }}
    >
        <Box sx={{height:"38px"}} />
      <Text sx={{ fontWeight: "bold", fontSize: 4, color: "#666" }}>
        {label}
      </Text>
    </Box>
  );
};
