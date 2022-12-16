import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from 'theme-ui';

interface INavLink {
    label: string;
  location: string;
  icon: IconDefinition;
}

export const NavLink : FC<INavLink> = ({
    label, location, icon
}) => {
  return ( 
    <Box
    key={label}
    sx={{
      marginBottom: "4px",
    }}
  >
    <Link to={location} data-icon={label}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          justifyContent: "center",
          paddingY: "8px",
          borderRadius: "4px",
          "& > svg": { color: "#616161" },
          "&:hover": { backgroundColor: "white" },
          "&:hover > *": { color: "appBackground" },
        }}
      >
        <FontAwesomeIcon icon={icon} fontSize="22" />
        <Text sx={{ fontSize: 10, textAlign: "center", fontWeight: "600" }}>
          {label}
        </Text>
      </Box>
    </Link>
  </Box>
   )
}
