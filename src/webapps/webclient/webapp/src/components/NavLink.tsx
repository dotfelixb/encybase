import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "theme-ui";

interface INavLink {
  label: string;
  location: string;
  icon: IconDefinition;
}

export const NavLink: FC<INavLink> = ({ label, location, icon }) => {
  return (
    <Box
      key={label}
      sx={{
        marginBottom: 1,
      }}
    >
      <Link to={location} data-icon={label}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            justifyContent: "center",
            paddingY: 2,
            borderRadius: "4px",
            "& > svg": { color: "#616161" },
            "&:hover": { backgroundColor: "white", },
            "&:hover > *": { color: "appBackground" , fontWeight:"bold"},
          }}
        >
          <FontAwesomeIcon icon={icon} fontSize="20" />
          <Text
            sx={{
              fontSize: 0,
              textAlign: "center",
              fontWeight: "600",
              color: "#666",
            }}
          >
            {label}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
