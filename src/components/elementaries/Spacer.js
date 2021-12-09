import styled from "styled-components";

export const Spacer = styled.div`
    height: ${props => (props.h ?? "10px")};
    min-height: ${props => (props.h ?? "10px")};
    width: ${props => (props.w ?? "10px")};
    min-width: ${props => (props.w ?? "10px")};
    flex-grow: ${props => props.grow};
    background-color: ${props => props.col}
`;