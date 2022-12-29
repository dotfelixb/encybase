import React, { FC } from "react";
import { Box, Button, Input } from "theme-ui";
import { SelectInput, TextInput } from "../components";

interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <Box>
        <Button variant="default" m={1}>
          Reset
        </Button>
        <Button m={1}>Save</Button>
      </Box>
      <Box>
        <TextInput label="Username" required />
        <TextInput
          label="Password"
          password
          error
          errorMessage="Password not properly formed"
        />
        <SelectInput
          label="Pick Direction"
          data={["North", "East", "South", "West"]}
          required
        />
      </Box>
    </div>
  );
};
