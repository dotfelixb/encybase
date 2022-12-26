import React, { FC } from "react";
import { Box, Flex, Input, Label, Text } from "theme-ui";

interface ITextInput {
  label: string;
  dir?: "row" | "column";
  required?: boolean;
  password?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export const TextInput: FC<ITextInput> = (props) => {
  const {
    label,
    dir = "column",
    required,
    password,
    error,
    errorMessage,
  } = props;
  return (
    <Flex sx={{ flexDirection: dir }}>
      <Box sx={{ flex: 1 }}>
        <Label>{label}</Label>
        <Label>{required && " *"}</Label>
      </Box>
      <Box
        sx={{
          flex: 1,
          borderRadius: "2px",
          border: (t) =>
            `1px solid ${
              error ? t?.colors?.errorColor : t?.colors?.menuBackground
            }`,
        }}
      >
        <Input type={password ? "password" : "text"} />
      </Box>
      <Box>
        <Text sx={{ fontSize: 0, color: "errorColor" }}>
          {error && errorMessage && errorMessage}
        </Text>
      </Box>
    </Flex>
  );
};
