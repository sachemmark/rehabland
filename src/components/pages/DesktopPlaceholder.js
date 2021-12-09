import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100vw;
`;

export default function DesktopPlaceholder() {
    return <Wrap>Desktop не пользуется нашим уважением</Wrap>;
}