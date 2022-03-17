import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { GlobalProvider } from "../global/GState";

export const App = () => {
    return (
        <React.Fragment>
            <GlobalProvider>
                <Main />
            </GlobalProvider>
        </React.Fragment>
    );
};



