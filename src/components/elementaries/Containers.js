import styled from "styled-components";

export const DivContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: ${props => props.align ?? "center"};
    align-self: ${props => props.alignSelf};
    justify-content: ${props => props.justify ?? "center"};
    height: ${props => props.h};
    width: ${props => props.w};
    background-color: ${props => props.col ?? "transparent"};
    flex: ${props => props.flex};
    flex-grow: ${props => props.fgrow};
    flex-wrap: ${props => props.fwrap};
    padding: ${props => props.pad};
`;

export const DivRow = styled(DivContainer)`
    flex-direction: row;
`;

export const DivColumn = styled(DivContainer)`
    flex-direction: column;
`;