import React, { FC, ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "theme-ui";

interface IPageTabPane {
  title: string;  
  children: ReactElement | ReactElement[];
}

const PageTabPane: FC<IPageTabPane> = ({ children }): JSX.Element => (
  <Box sx={{}}>{children}</Box>
);

interface IPageTabTitle {
  title: string;
  index: number; 
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
}

const PageTabTitle: FC<IPageTabTitle> = (props) => {
  const { title, index, setSelectedTab, isActive } = props;

  const handleClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <Link to={`?tab=${index}`} preventScrollReset={true}>
      <Box
        sx={{
          backgroundColor: isActive ? "white" : "menuBackground",
          height: "32px",
          lineHeight: "32px",
          paddingX: "6px",
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
    </Link>
  );
};

interface IPageTab {
  children: ReactElement<IPageTabTitle>[];
  preSelectedIndex?: number;
}

const PageTab: FC<IPageTab> = (props) => {
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
          gap: "2px",
          backgroundColor: "white",
        }}
      >
        {children.map((item, index) => (
          <PageTabTitle
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

export { PageTab, PageTabPane };
