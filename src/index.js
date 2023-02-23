import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import store from "./store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { productsApi } from "./store/apiSlice";
const theme = createTheme({
  palette: {
    mode: "dark",
    // background: {
    //   paper: '#303030',
    //   default: '#212121',
    // },
    // text: {
    //   primary: '#fff',
    //   secondary: '#b0bec5',
    // },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>

      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
