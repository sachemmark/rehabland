import React from "react";
import Page from "../elementaries/Page";
import { Spacer } from "../elementaries/Spacer";
import { CenteredText, Text } from "../elementaries/Text";
import { HorizontalLine } from "../elementaries/Decoration";
import { useNavigate } from 'react-router-dom';

import CanInHand from "../../assets/images/can-in-hand.png";
import ColdBrewCrystal from "../../assets/images/coldbrew-crystal.png";
import GreenBeans from "../../assets/images/green-beans.png";

import { FilledButton } from "../elementaries/Buttons";

export default function StartPage() {

    const navigate = useNavigate();

    return (
        <Page>
            <Spacer h="76px"/>
            <CenteredText>Ремесло прекрасно</CenteredText>
            <Spacer h="76px"/>
            <Text>Рехаб лэнд это представление каким должен быть децентрализованный ритейл.</Text>
            <Spacer h="26px"/>
            <Text>Нам по двадцать, мы увлечены продуктами питания, но нынешний ритейл не подходит для быстрого развития уровня продуктов и они абсолютно не разумно распределяют прибыль между участниками, создающими эти продукты.</Text>
            <Spacer h="96px"/>
            <HorizontalLine/>
            <Spacer h="96px"/>

            <img src={CanInHand} width="100%" alt=""/>
            <Spacer h="26px"/>
            <CenteredText>Элексир</CenteredText>
            <Spacer h="76px"/>

            <img src={ColdBrewCrystal} width="100%" alt=""/>
            <Spacer h="26px"/>
            <CenteredText>Безупречная фильтрация</CenteredText>
            <Spacer h="76px"/>

            <img src={GreenBeans} width="100%" alt=""/>
            <Spacer h="26px"/>
            <CenteredText>Зеленое зерно в грейн про</CenteredText>
            <Spacer h="96px"/>

            <Text>Это эликсир приготовлен из анаэробной эфиопии и воды. Без калорий. Без сахара. Без добавок. Это на 100% органический продукт. Только натуральный вкус терруара.</Text>
            <Spacer h="26px"/>
            <Text>Заперт в банке, даст тебе отличную стимуляцию на 3-4 часа. Плавную и натуральную. Ядовитые коммерческие энергетики лучше оставить в магазине. Мы уверены в своем продукте и даем скидку 30% на первый месяц подписки. Без спекуляций, но пока ещё никто не вернулся обратно к энергетикам и горячему кофе. Это важно.</Text>
            <Spacer h="26px"/>
            <Text>Это свежо, кислотно и алкогольно. Зерно из Эфиопии с фермы Бале Маунтин, что в горном массиве Бале-Арси с высотами до 3000 м. Но кофе растет до 2400, а все что выше-охраняемая государством территория по программе сохранения уникальных горных лесов.</Text>
            <Spacer h="26px"/>
            <Text>Про анаэробную обработку нашего зерна: Когда пришло время урожая, спелые ягоды вручную собирают, после этого с зерном внутри их отправляют на 72 часа в танки с водой для ферментации, где в процессе контролируются разные параметры-от температуры до содержания сахаров. Под действием миллиона местных микроорганизмов, в мякоти начинаются химические процессы ферментации, часть которых оставляет след на зелёном зерне. Отсюда в нашем эликсире столько необычных для кофе дескрипторов.</Text>
            <Spacer h="26px"/>
            <Text>Это подписка на месяц; 9 банок; скидка на первый заказ 30 процентов:</Text>
            <Spacer h="76px"/>
            <FilledButton
                onClick={() => navigate("/order")}
                title="₽ 2394"
            />
            <Spacer h="76px"/>
            <CenteredText>First release of the elixir</CenteredText>
            <Spacer h="76px"/>
            <HorizontalLine/>
            <Spacer h="26px"/>
        </Page>
    );
}


