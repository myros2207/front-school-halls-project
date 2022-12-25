import {FC, useEffect, useState} from "react";
import LiveSearch from "./Component/DropDown/LiveSearch";
import axios from 'axios';
import DropDownComponent from "./Component/DropDown/DropDownComponent";
import SearchTest from "./Component/testSearch/SearchTest";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookHallComponent from "./Component/BookingHalls/BookHallComponent";
import StartPage from "./Component/StartPage";
import HomePageComponent from "./Component/HomePage/HomePageComponent";

// interface Props {
// }


const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<StartPage/>}/>
                    <Route path={"/book"} element={<BookHallComponent/>}/>
                    <Route path={"/home"} element={<HomePageComponent/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
