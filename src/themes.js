import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
    colors: {
        background: {
            A: "#FFFFFF",
        },
        text: {
            A: "#333333",
        },
        gray: {
            A: "#CCCCCC",
        },
        blue: {
            A: "#0079FA",
        },
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;