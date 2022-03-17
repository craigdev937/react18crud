import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { GlocalProvider } from "../global/GState";

export const App = () => {
    return (
        <React.Fragment>
            <GlocalProvider>
                <Main />
            </GlocalProvider>
        </React.Fragment>
    );
};



