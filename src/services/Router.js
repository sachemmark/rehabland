/* eslint-disable */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "../components/pages/StartPage";
import OrderPage from "../components/pages/OrderPage";
import SuccessfulPaymentPage from "../components/pages/SuccessfulPaymentPage";


function configureRoutes() {
    let rts = [
        { url: "/", link: "/", name: "start", exact: true, element: <StartPage/> },
        { url: "/order", link: "/order", eaxact: true, element: <OrderPage/> },
        { url: "/successful", link: "/successful", exact: true, element: <SuccessfulPaymentPage/> },
    ];
    return rts;
}


export default function Router() {
    const routes = configureRoutes();

    return (
        <BrowserRouter>
             <Routes>
                 {routes.map(route => (
                    <Route 
                        exact={ route.exact } 
                        path={ route.url } 
                        element={ route.element }
                        key={ route.url ?? "default" } 
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}