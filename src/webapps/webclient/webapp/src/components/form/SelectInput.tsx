/** @jsxImportSource theme-ui */
import React, { FC, useState } from "react";
import { Box, Flex, Input, Label, Text } from "theme-ui";

interface ISelectInput {
  label: string;
  dir?: "row" | "column";
  data: any[];
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export const SelectInput: FC<ISelectInput> = (props) => {
  const { label, dir = "column", data, required, error, errorMessage } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null!);
  const handleToggle = () => setOpen(!open);
  const handleSelect = (s: any) => setSelected(s);

  return (
    <Flex sx={{ flexDirection: dir }}>
      <Box sx={{ flex: 1 }}>
        <Label>{label}</Label>
        <Label>{required && " *"}</Label>
      </Box>
      <Box
        onClick={handleToggle}
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          borderRadius: "2px",
          border: (t) =>
            `1px solid ${
              error ? t?.colors?.errorColor : t?.colors?.menuBackground
            }`,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Input value={selected} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingX: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            sx={{ width: "16px" }}
          >
            <title>Chevron Down</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </Box>
      </Box>
      <Box sx={{ position: "relative", marginTop: 1 }}>
        <Box
          onClick={handleToggle}
          sx={{
            display: open ? "block" : "none",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            padding: 1,
            borderRadius: 2,
            border: (t) => `1px solid ${t?.colors?.menuBackground}`,
            boxShadow: (t) =>
              `-1px 1px 5px ${t?.colors?.infoBackground}, 1px 0px 5px ${t?.colors?.infoBackground}`,
            cursor: "default",
          }}
        >
          {data.map((d) => (
            <Box
              key={d}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 1,
                borderRadius: 2,
                "&:hover": { bg: "menuBackground" },
              }}
              onClick={() => handleSelect(d)}
            >
              <Text sx={{ fontSize: 0 }}>{d}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Text sx={{ fontSize: 0, color: "errorColor" }}>
          {error && errorMessage && errorMessage}
        </Text>
      </Box>
    </Flex>
  );
};
