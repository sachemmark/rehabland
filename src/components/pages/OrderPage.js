import React, { useState } from "react";
import { FilledButton } from "../elementaries/Buttons";
import { useNavigate } from "react-router-dom";
import Page from "../elementaries/Page";
import { Spacer } from "../elementaries/Spacer";
import { Text, CenteredText } from "../elementaries/Text";
import { TitledTextField } from "../elementaries/TextField";
import { HorizontalLine } from "../elementaries/Decoration";

export default function OrderPage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [intercom, setIntercom] = useState("");

    return (
        <Page>
            <Spacer h="56px"/>
            <Text>In order for you to receive physical packages, your address is required. </Text>
            <Spacer h="56px"/>

            <TitledTextField
                title="Имя" placeholder="Егор"
                setter={setName}
            />
            <Spacer h="26px"/>

            <TitledTextField
                title="Телефон" placeholder="+79998887777" w="75%"
                setter={setPhone}
            />
            <Spacer h="26px"/>

            <TitledTextField
                title="Город" placeholder="Москва"
            />
            <Spacer h="26px"/>

            <TitledTextField
                title="Адрес" placeholder="Тверская 1, д 1"
                setter={setAddress}
            />
            <Spacer h="26px"/>

            <TitledTextField
                title="Комментарий" placeholder="Доставьте завтра после 19:00"
                setter={setComment}
            />
            <Spacer h="26px"/>

            <TitledTextField
                title="Домофон" placeholder="12К3456" w="75%"
                setter={setIntercom}
            />
            <Spacer h="56px"/>

            <FilledButton
                onClick={() => navigate("/successful")}
                title="₽ 2394"
            />
            <Spacer h="56px"/>

            {name !== "" &&  <CenteredText>{`Спасибо, ${name}!\nТы с нами с самого начала`}</CenteredText>}
            {name !== "" && <Spacer h="56px"/>}

            <HorizontalLine/>
            <Spacer h="26px"/>
            
        </Page>
    );
}


