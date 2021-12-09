import React from "react";
import styled from "styled-components";
import { DivColumn } from "./Containers";
import { Spacer } from "./Spacer";
import { Text } from "./Text";

const InputBox = styled.input`
  height: 46px;
  padding: 0 15px;
  box-sizing: border-box;
  width: ${props => props.w ?? "100%"};
  
  border-radius: 4.5px;
  border: 1px solid ${props => props.theme.colors.gray.A};
  &:focus {
    outline: none;
  }

  color: ${props => props.theme.colors.text.A};
  font-family: Helvetica;
  font-size: 17px;

  ::placeholder {
    color: ${props => props.theme.colors.gray.A};
  }
`;


export function TitledTextField({ title, placeholder, w, setter }) {
    return (
        <DivColumn w="100%" align="start">
            <Text>{title}</Text>
            <Spacer h="16px"/>
            <InputBox 
                placeholder={placeholder}
                onChange={(event) => {
                    setter(event.target.value);
                }}
                w={w}
            />
        </DivColumn>
    );
}