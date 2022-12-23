import { FC, ReactElement, useCallback, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
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
  renderTitle?: boolean;
  appendTab?: boolean;
}

const PageTabTitle: FC<IPageTabTitle> = (props) => {
  const { title, index, setSelectedTab, isActive, renderTitle, appendTab } =
    props;
  const location = useLocation();
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  const setTab = useCallback((index: number, queryString: string) => {
    const searchStr = queryString.replace("?", "").split("&");
    const allTabs = searchStr.filter((e) => e.startsWith("tab"));
    const nonTabs = searchStr.filter((e) => !allTabs.includes(e));

    setSearchParams(`${nonTabs.join("&")}&tab=${index}`);
  }, [setSearchParams]);

  const handleClick = useCallback(() => {
    setSelectedTab(index);
    if (appendTab) {
      setTab(index, location.search);
    }
  }, [setSelectedTab, index, location, appendTab, setTab]);

  return (
    <>
      {renderTitle ? (
        <Box
          sx={{
            backgroundColor: isActive ? "white" : "menuBackground",
            height: "32px",
            lineHeight: "32px",
            paddingX: 2,
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <Text
            sx={{
              fontWeight: "bold",
              fontSize: 0,
              color: isActive ? "black" : "appBackground",
            }}
          >
            {title}
          </Text>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

interface IPageTab {
  children: ReactElement<IPageTabTitle>[];
  preSelectedIndex?: number;
  renderTitle?: boolean;
  appendTab?: boolean;
}

const PageTab: FC<IPageTab> = (props) => {
  const {
    children,
    preSelectedIndex,
    renderTitle = true,
    appendTab = false,
  } = props;
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") ?? "0";

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    preSelectedIndex || +tab
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderColor: "menuBackground",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2px",
          backgroundColor: "white",
          borderColor: "menuBackground",
          borderWidth: 1,
          // borderBottomStyle: "solid",
        }}
      >
        {children.map((item, index) => (
          <PageTabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
            renderTitle={renderTitle}
            appendTab={appendTab}
          />
        ))}
      </Box>
      <Box sx={{ padding: 2 }}>{children[selectedTabIndex]}</Box>
    </Box>
  );
};

export { PageTab, PageTabPane };
