import React from "react";
import styled from "styled-components";
import { DivContainer, DivColumn } from "./Containers";

const PageWrap = styled(DivContainer)`
    height: 100vh;
    width: 100vw;
    padding: 25px;
    align-items: start;
    background-color: ${props => (props.col ?? props.theme.colors.background.A)};
    justify-content: center;
    overflow-y: scroll;
`;

const PageContent = styled(DivColumn)`
    width: calc(100vw - 50px);
    max-width: 350px;
`;

export default function Page({ children, col }) {
    return (
        <PageWrap col={col}>
            <PageContent>
                {children}
            </PageContent>
        </PageWrap>
    );
}