import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    body: "Segoe UI, system-ui, -apple-system, sans-serif",
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    buttonColor: "#637BAD",
    buttonDefaultColor: "#F0F0F0",
    buttonBorderColor: "#313d56",
    appBackground: "#3B5998",
    menuBackground: "#D8DFEA",
    commandBackground: "#EBEEF4",
    headerBackground: "#EDEFF4",
    infoBackground: "#F2F2F2",
    borderColor: "#dee2e6",
    errorColor:"#cc2324"
  },
  styles: {
    root: {
      fontFamily: "body",
      button: {
        fontFamily: "body",
        fontWeight:"500"
      },
    },
  },
  buttons: {
    default: {
      borderRadius: 2,
      paddingX: 3,
      paddingY: 1,
      color:"black",
      fontSize:0,
      bg:"buttonDefaultColor",
      borderWidth: "1px",
      borderStyle: "solid",
      "&:hover":{
        bg:"#f1f1f1"
      }
    },
    command: {
      borderRadius: 2,
      paddingX: 1,
      paddingY: 1,
      color:"black",
      fontSize:0,
      bg:"transparent",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor:"transparent",
      "&:hover":{
        borderColor:"menuBackground",
      }
    },
    primary: {
      borderRadius: 2,
      paddingX: 3,
      paddingY: 1,
      color: "white",
      fontSize:0,
      bg: "buttonColor",
      borderColor: "buttonBorderColor",
      borderWidth: "1px",
      borderStyle: "solid",
      "&:hover":{
        bg:"#4f628a"
      }
    },
  },
  forms: {
    label:{
      display:"inline",
      fontSize:0,
    },
    input: {
      fontFamily: "body", fontSize: 0,
      borderRadius:2,
      borderColor:"transparent",
      paddingX: 2,
      paddingY: 1,
      '&:focus, &:hover': {
        outline: 'none',
        // borderColor:"menuBackground",
      },
    },
  },
};
