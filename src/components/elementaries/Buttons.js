import React from "react";
import styled from "styled-components";
import { DivContainer } from "./Containers";

const BasicButton = styled.div`
    border-radius: 4.5px;
    max-height: 45px;
    min-height: 45px;
    padding-left: 45px;
    padding-right: 45px;
    font-size: 17px;
    line-height: 45px;
    font-family: Helvetica;
    margin-left: ${props => props.ml};
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const OutlineButtonWrap = styled(BasicButton)`
    border: 1px solid ${props => props.theme.colors.gray.A};
    color: black;
`;

const FilledButtonWrap = styled(BasicButton)`
    background-color: ${props => props.theme.colors.blue.A};
    color: white;
`;

const ButtonContainerWrap = styled(DivContainer)`
    width: 100%;
    justify-content: start;
`;

export function OutlineButton({ title, onClick }) {
    return <ButtonContainerWrap>
        <OutlineButtonWrap 
            ml="56px"
            onClick={ () => onClick() }
        >
            {title}
        </OutlineButtonWrap>
    </ButtonContainerWrap>;
}

export function FilledButton({ title, onClick }) {
    return <ButtonContainerWrap>
        <FilledButtonWrap 
            ml="56px"
            onClick={ () => onClick() }
        >
            {title}
        </FilledButtonWrap>
    </ButtonContainerWrap>;
}