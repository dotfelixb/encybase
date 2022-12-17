import React, { FC, ReactElement, useCallback, useState } from "react";
import { Box, Text } from "theme-ui";

interface IMenuTabPane {
  title: string;
  children: ReactElement | ReactElement[];
}

const MenuTabPane: FC<IMenuTabPane> = ({ children }): JSX.Element => (
  <Box sx={{}}>{children}</Box>
);

interface IMenuTabTitle {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
}

const MenuTabTitle: FC<IMenuTabTitle> = (props) => {
  const { title, index, setSelectedTab, isActive } = props;

  const handleClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <Box
      sx={{
        backgroundColor: isActive ? "white" : "menuBackground",
        paddingX: "6px",
        paddingY: "4px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Text
        sx={{
          fontWeight: "bold",
          fontSize: "13px",
          color: isActive ? "black" : "appBackground",
        }}
      >
        {title}
      </Text>
    </Box>
  );
};

interface IMenuTab {
  children: ReactElement<IMenuTabTitle>[];
  preSelectedIndex?: number;
}

const MenuTab: FC<IMenuTab> = (props) => {
  const { children, preSelectedIndex } = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    preSelectedIndex || 0
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2px",
          backgroundColor: "white",
        }}
      >
        {children.map((item, index) => (
          <MenuTabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </Box>
      {children[selectedTabIndex]}
    </Box>
  );
};

export { MenuTab, MenuTabPane };
