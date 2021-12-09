import styled from "styled-components";
import { DivContainer } from "./Containers";

export const HorizontalLine = styled(DivContainer)`
    width: 100vw;
    height: 1px;
    background-color: ${props => props.theme.colors.gray.A};
`;